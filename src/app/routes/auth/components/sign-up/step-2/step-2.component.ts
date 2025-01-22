import {Component, OnInit} from '@angular/core';
import {PagesWithLogoComponent} from "../../../../../shared/components/pages-with-logo/pages-with-logo.component";
import {InputOtp} from "primeng/inputotp";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {TranslatePipe} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss'],
  imports: [
    PagesWithLogoComponent,
    InputOtp,
    FormsModule,
    Button,
    TranslatePipe
  ],
  standalone: true
})
export class Step2Component implements OnInit {
  value: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log()
  }

  continue() {
    if (this.value) {
      this.router.navigateByUrl('step-3');
    }
  }
}
