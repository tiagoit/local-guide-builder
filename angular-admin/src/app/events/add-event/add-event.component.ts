import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { OrgService } from '../../orgs/org.service';
import { Org, Event } from '../../models';

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @ViewChild("firstInput") firstInput: ElementRef;

  fg: FormGroup;
  timeOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  imgPreview: any[] = [];
  files: File[] = [];
  orgs: Org[];
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(fb: FormBuilder, private service: EventService, private router: Router, public snackBar: MatSnackBar,
    private orgService: OrgService,
    private http: HttpClient, private el: ElementRef) {
    this.fg = fb.group({
      start: ['', Validators.required],
      startTime: [],
      org_code: ['', Validators.required],
      title: ['', Validators.required],
      img: ['', Validators.required],
      featured: ['']
    });
  }

  ngOnInit() {
    this.orgService.get().subscribe((orgs: Org[]) => this.orgs = orgs);
    this.firstInput.nativeElement.focus();
    
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };
    
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit')
  //   this.firstInput.nativeElement.focus();
  // }

  save() {
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

    event.title     = this.fg.controls.title.value;
    event.img       = this.fg.controls.img.value;
    event.featured  = this.fg.controls.featured.value || false;
    // event.img1      = this.fg.controls.img1.value || false;
    // event.img2      = this.fg.controls.img2.value || false;
    // event.img3      = this.fg.controls.img3.value || false;
    // event.img4      = this.fg.controls.img4.value || false;

    this.service.add(event).subscribe((res) => {
      this.snackBar.open('Evento adicionado com sucesso!', null, {duration: 2000});
      this.router.navigate([`/events`]);
    })
  }
 
  preview(files, idx) {
    if (files.length === 0) return;

    this.files[idx] = files[0];

    let reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => {
      this.imgPreview[idx] = reader.result;
    }
  }
}

