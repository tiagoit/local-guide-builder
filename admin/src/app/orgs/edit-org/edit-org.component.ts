import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrgService } from "../org.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { City, Org } from '../../models';
import { CityService } from '../../cities/city.service';

@Component({
  selector: 'app-edit-org',
  templateUrl: './edit-org.component.html',
  styleUrls: ['./edit-org.component.scss']
})
export class EditOrgComponent implements OnInit {
  org: any;
  fg: FormGroup;
  cities: City[];

  constructor(private route: ActivatedRoute, private service: OrgService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar, private cityService: CityService) {
    this.fg = fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      mobile: [''],
      land: [''],
      email: [''],
      notes: [''],
      status: [''],

      city: ['', Validators.required],
      neighborhood: [''],
      street: [''],
      number: [''],
      complement: [''],
      zip_code: [''],
    
      contact_name: [''],
      contact_email: [''],
      contact_mobile: [''],
      contact_role: [''],
      contact_notes: ['']
    });
  }

  ngOnInit() {
    this.cityService.get().subscribe((cities: City[]) => this.cities = cities);
    this.route.params.subscribe(p => {
      this.service.getById(p.id).subscribe(org => {
        this.org = org;
        this.fillForm();
      })
    });
  }

  fillForm() {
    this.fg.controls.code.setValue(this.org.code);
    this.fg.controls.name.setValue(this.org.name);

    this.fg.controls.code.setValue(this.org.code)
    this.fg.controls.name.setValue(this.org.name)
    this.fg.controls.mobile.setValue(this.org.mobile)
    this.fg.controls.land.setValue(this.org.land)
    this.fg.controls.email.setValue(this.org.email)
    this.fg.controls.notes.setValue(this.org.notes)
    this.fg.controls.status.setValue(this.org.status)

    this.fg.controls.city.setValue(this.org.address.city)
    this.fg.controls.neighborhood.setValue(this.org.address.neighborhood)
    this.fg.controls.street.setValue(this.org.address.street)
    this.fg.controls.number.setValue(this.org.address.number)
    this.fg.controls.complement.setValue(this.org.address.complement)
    this.fg.controls.zip_code.setValue(this.org.address.zip_code)
  
    this.fg.controls.contact_name.setValue(this.org.contact.name)
    this.fg.controls.contact_email.setValue(this.org.contact.email)
    this.fg.controls.contact_mobile.setValue(this.org.contact.mobile)
    this.fg.controls.contact_role.setValue(this.org.contact.role)
    this.fg.controls.contact_notes.setValue(this.org.contact.notes)
  }

  update() {
    let org: Org = new Org();
    org._id       = this.org._id;
    org.code      = this.fg.controls.code.value;
    org.name      = this.fg.controls.name.value;
    org.mobile    = this.fg.controls.mobile.value;
    org.land      = this.fg.controls.land.value;
    org.email     = this.fg.controls.email.value;
    org.notes     = this.fg.controls.notes.value;
    org.status    = this.fg.controls.status.value;

    org.address.state         = 'BA';
    org.address.city          = this.fg.controls.city.value;
    org.address.neighborhood  = this.fg.controls.neighborhood.value;
    org.address.street        = this.fg.controls.street.value;
    org.address.number        = this.fg.controls.number.value;
    org.address.complement    = this.fg.controls.complement.value;
    org.address.zip_code      = this.fg.controls.zip_code.value;
  
    org.contact.name    = this.fg.controls.contact_name.value;
    org.contact.email   = this.fg.controls.contact_email.value;
    org.contact.mobile  = this.fg.controls.contact_mobile.value;
    org.contact.role    = this.fg.controls.contact_role.value;
    org.contact.notes   = this.fg.controls.contact_notes.value;

    this.service.update(org).subscribe((res) => {
      this.snackBar.open('Organização atualizada com sucesso!', null, {duration: 2000});
      this.router.navigate([`/orgs`]);
    });
  }

  cancel() {
    this.router.navigate(['/orgs']);
  }

}
