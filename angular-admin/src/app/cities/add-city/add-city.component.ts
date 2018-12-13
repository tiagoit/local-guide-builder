import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityService } from '../city.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  @ViewChild("firstInput") firstInput: ElementRef;
  fg: FormGroup;

  constructor(fb: FormBuilder, private service: CityService, private router: Router, public snackBar: MatSnackBar) {
    this.fg = fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
  }

  save() {
    let data = {};
    data['code']  = this.fg.controls.code.value;
    data['name']  = this.fg.controls.name.value;
    
    this.service.add(data).subscribe((res) => {
      this.snackBar.open('Cidade adicionada com sucesso!', null, {duration: 2000});
      this.router.navigate([`/cities`]);
    })
  }
}

