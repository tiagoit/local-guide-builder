import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from "../event.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Event, Org } from '../../models';
import { OrgService } from '../../orgs/org.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  event: any;
  fg: FormGroup;
  timeOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  orgs: Org[];

  constructor(private route: ActivatedRoute, private service: EventService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar, private orgService: OrgService) {
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

    this.route.params.subscribe(p => {
      this.service.getById(p.id).subscribe(event => {
        this.event = event;
        this.fillForm(event);
      })
    });
  }

  fillForm(event) {
    this.fg.controls.start.setValue(event.start);
    this.fg.controls.startTime.setValue(new Date(event.start).getUTCHours());
    this.fg.controls.org_code.setValue(event.org_code);
    this.fg.controls.title.setValue(event.title);
    this.fg.controls.img.setValue(event.img);
    this.fg.controls.featured.setValue(event.featured);
  }

  update() {
    let event: Event = new Event();

    let dateWithTime: Date = new Date(this.fg.controls.start.value);
    dateWithTime.setHours(this.fg.controls.startTime.value);
    event.start     = dateWithTime;

    this.orgs.forEach(org => {
      if(org.code === this.fg.controls.org_code.value) {
        event.org_code = org.code;
        event.org_name = org.name;
        event.org_city = org.address.city;
      }
    });
    
    event._id       = this.event._id;
    event.title     = this.fg.controls.title.value;
    event.img       = this.fg.controls.img.value;
    event.featured  = this.fg.controls.featured.value;

    this.service.update(event).subscribe((res) => {
      this.snackBar.open('Evento atualizado com sucesso!', null, {duration: 2000});
      this.router.navigate([`/events`]);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
