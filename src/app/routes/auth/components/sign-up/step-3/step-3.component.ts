import {Component, OnInit} from '@angular/core';
import {PagesWithLogoComponent} from "../../../../../shared/components/pages-with-logo/pages-with-logo.component";
import {Button} from "primeng/button";
import {TranslatePipe} from "@ngx-translate/core";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AutocompleteDirective} from "../../../../../shared/directives/autocomplete.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss'],
  imports: [
    PagesWithLogoComponent,
    Button,
    TranslatePipe,
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    AutocompleteDirective,
  ],
  providers: [],
  standalone: true
})
export class Step3Component implements OnInit {
  personalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.personalForm = fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    console.log()
  }

  continue() {
    this.router.navigateByUrl('home')
  }

}
