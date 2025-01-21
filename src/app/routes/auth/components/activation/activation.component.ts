import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/routes/auth/services/auth.service';
import {IonicModule} from "@ionic/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss'],
  imports: [
    IonicModule,
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class ActivationComponent {
  activationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.activationForm = this.fb.group({
      otpCode: new FormControl(null, [Validators.required]),
      username: new FormControl(this.route.snapshot.paramMap.get('id'), [Validators.required])
    })
  }

  sendCode(): void {
    this.authService.sendActivationCode(this.activationForm.value).subscribe(d => {
      console.log(d)
    })
  }

}
