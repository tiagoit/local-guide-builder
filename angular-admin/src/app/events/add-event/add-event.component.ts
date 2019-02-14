import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

import { OrgService } from '../../orgs/org.service';
import { Org, Event } from '../../models';
import { UploadService } from 'src/app/services/upload.service';

@Component({
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
  newEvent: Event = new Event();

  constructor(fb: FormBuilder, private service: EventService, private router: Router, public snackBar: MatSnackBar,
    private orgService: OrgService, private http: HttpClient, private el: ElementRef, public uploadService: UploadService) {
    this.fg = fb.group({
      start: ['', Validators.required],
      startTime: [],
      org_code: ['', Validators.required],
      title: ['', Validators.required],
      featured: ['']
    });
  }

  ngOnInit() {
    this.orgService.get().subscribe((orgs: Org[]) => this.orgs = orgs);
    this.firstInput.nativeElement.focus();
  }

  save() {
    let dateWithTime: Date = new Date(this.fg.controls.start.value);
    dateWithTime.setHours(this.fg.controls.startTime.value);
    this.newEvent.start = dateWithTime;

    this.orgs.forEach(org => {
      if(org.code === this.fg.controls.org_code.value) {
        this.newEvent.org_code = org.code;
        this.newEvent.org_name = org.name;
        this.newEvent.org_city = org.address.city;
      }
    });

    this.newEvent.title     = this.fg.controls.title.value;
    this.newEvent.featured  = this.fg.controls.featured.value || false;

    this.service.add(this.newEvent).subscribe((res) => {
      this.snackBar.open('Evento adicionado com sucesso!', null, {duration: 2000});
      this.router.navigate([`/events`]);
    })
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
    this.uploadService.upload(file).subscribe(event => {
      if(event.type === HttpEventType.Response) {
        console.log('upload finished: ', event.body);
        this.newEvent.images[idx] = event.body.gcsPublicUrl;
      }
    });
  }
}

