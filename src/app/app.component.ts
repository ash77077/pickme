import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {TranslateService} from "@ngx-translate/core";
import {DefaultLanguage, LOCALES} from "./core/constants/app.constants";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  standalone: true
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(LOCALES);
    this.translate.setDefaultLang(DefaultLanguage);
  }
}

//AIzaSyAyASNlKJNZWvA-eeWXobQ9kQoPuJcGw_g
