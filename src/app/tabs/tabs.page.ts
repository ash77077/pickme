import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  //IonTabButton, IonIcon, IonLabel
  imports: [IonTabs, IonTabBar],
  standalone: true
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
