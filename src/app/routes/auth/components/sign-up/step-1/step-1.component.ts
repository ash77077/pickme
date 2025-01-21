import {Component, OnInit} from '@angular/core';
import {PagesWithLogoComponent} from "../../../../../shared/components/pages-with-logo/pages-with-logo.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputMask} from "primeng/inputmask";
import {Button} from "primeng/button";
import {PhoneCodeSelectComponent} from "../../../../../shared/components/phone-code-select/phone-code-select.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss'],
  imports: [
    PagesWithLogoComponent,
    ReactiveFormsModule,
    InputMask,
    PhoneCodeSelectComponent,
    Button,
    TranslatePipe,
  ],
  standalone: true
})
export class Step1Component implements OnInit {
  cities: any[];
  formGroup: FormGroup | undefined;

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
      number: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  continue() {
    console.log(this.formGroup.value)
  }
}
