import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Select} from "primeng/select";
import {codes} from 'country-calling-code';

@Component({
  selector: 'app-phone-code-select',
  templateUrl: './phone-code-select.component.html',
  styleUrls: ['./phone-code-select.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    Select
  ]
})
export class PhoneCodeSelectComponent implements OnInit {
  @Input() control: FormControl | AbstractControl | any;
  countries: any[] | undefined;

  constructor() {
  }

  ngOnInit() {
    this.countries = codes.filter(c => c.isoCode2 === 'AM')
    this.control.setValue(this.countries[0])
    this.control.disable();
  }

}
