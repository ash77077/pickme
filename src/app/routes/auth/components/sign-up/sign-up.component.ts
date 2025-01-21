import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [
    IonicModule,
    RouterOutlet
  ],
  standalone: true
})
export class SignUpComponent {

}
