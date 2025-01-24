import { Component, OnInit } from '@angular/core';
import {Avatar} from "primeng/avatar";
import {InputText} from "primeng/inputtext";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {Button} from "primeng/button";
import {Menu} from "primeng/menu";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    Avatar,
    InputText,
    InputGroup,
    InputGroupAddon,
    Button,
    Menu
  ]
})
export class HomeComponent  implements OnInit {
  items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
  constructor() { }

  ngOnInit() {
    console.log('6      ')
  }

}
