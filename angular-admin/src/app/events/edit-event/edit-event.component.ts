import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from "../event.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Event, Org } from '../../models';
import { OrgService } from '../../orgs/org.service';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  @ViewChild("firstInput") firstInput: ElementRef;
  event: any;
  fg: FormGroup;
  timeOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  orgs: Org[];
  imgPreview: any[] = [];
  files: File[] = [];

  constructor(private route: ActivatedRoute, private service: EventService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar, private orgService: OrgService, public uploadService: UploadService) {
    this.fg = fb.group({
      start: ['', Validators.required],
      startTime: [],
      org_code: ['', Validators.required],
      title: ['', Validators.required],
      featured: ['']
    });
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
    this.orgService.get().subscribe((orgs: Org[]) => this.orgs = orgs);

    this.route.params.subscribe(p => {
      this.service.getById(p.id).subscribe(event => {
        this.event = event;
        this.fillForm(event);


        // var request = new XMLHttpRequest();
        // request.open('GET', this.event.images[0], true);
        // request.responseType = 'blob';
        // request.onload = function() {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(request.response);
        //     reader.onload =  function(e){
        //         console.log('DataURL:', e.target['result']);
        //     };
        // };
        // request.send();

        
        // let reader = new FileReader();
        // // new File("/path/to/file");
        // reader.readAsDataURL(this.event.images[0].toBlob());
        // reader.onload = (_event) => {
        //   this.imgPreview[0] = reader.result;
        // }
      })
    });


  }

  fillForm(event) {
    this.fg.controls.start.setValue(event.start);
    this.fg.controls.startTime.setValue(new Date(event.start).getUTCHours());
    this.fg.controls.org_code.setValue(event.org_code);
    this.fg.controls.title.setValue(event.title);
    this.fg.controls.featured.setValue(event.featured);

    // this.files.push(event.images)
  }

  update() {
    let event: Event = new Event();

    let dateWithTime: Date = new Date(this.fg.controls.start.value);
    dateWithTime.setHours(this.fg.controls.startTime.value);
    event.start = dateWithTime;

    this.orgs.forEach(org => {
      if(org.code === this.fg.controls.org_code.value) {
        event.org_code = org.code;
        event.org_name = org.name;
        event.org_city = org.address.city;
      }
    });
    
    event._id       = this.event._id;
    event.title     = this.fg.controls.title.value;
    event.featured  = this.fg.controls.featured.value;

    this.service.update(event).subscribe((res) => {
      this.snackBar.open('Evento atualizado com sucesso!', null, {duration: 2000});
      this.router.navigate([`/events`]);
    });
  }
 
  preview(files: File[], idx: number) {
    if (files.length === 0) return;

    this.files[idx] = files[0];

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgPreview[idx] = reader.result;
    }

    this.upload(files[0], idx);
  }

  upload(file: File, idx: number) {
    let fileToDeleteUrl = this.event.images[idx];
    this.uploadService.upload(file).subscribe(event => {
      if(event.type === HttpEventType.Response) {
        console.log('upload finished: ', event.body);
        this.event.images[idx] = event.body.gcsPublicUrl;
      }
    });
    this.uploadService.delete(fileToDeleteUrl);
  }

  cancel() {
    this.router.navigate(['/events']);
  }



}
