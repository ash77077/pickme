import {Component, OnInit} from '@angular/core';
import {PagesWithLogoComponent} from "../../../../../shared/components/pages-with-logo/pages-with-logo.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Button} from "primeng/button";
import {PhoneCodeSelectComponent} from "../../../../../shared/components/phone-code-select/phone-code-select.component";
import {TranslatePipe} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {InputText} from "primeng/inputtext";

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss'],
  imports: [
    PagesWithLogoComponent,
    ReactiveFormsModule,
    PhoneCodeSelectComponent,
    Button,
    TranslatePipe,
    InputText,
  ],
  standalone: true
})
export class Step1Component implements OnInit {
  cities: any[];
  formGroup: FormGroup | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    this.formGroup = new FormGroup({
      code: new FormControl(null),
      number: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
    });
  }

  continue() {
    console.log(this.formGroup.value)
    if (this.formGroup.valid) {
      this.router.navigateByUrl('step-2')
    }
  }
}
