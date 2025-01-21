import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {Step1Component} from "./components/sign-up/step-1/step-1.component";
import {Step2Component} from "./components/sign-up/step-2/step-2.component";
import {Step3Component} from "./components/sign-up/step-3/step-3.component";

const routes: Routes = [
  {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {
    path: '', component: SignUpComponent, children: [
      {path: '', redirectTo: 'step-1', pathMatch: "full"},
      {path: 'step-1', component: Step1Component},
      {path: 'step-2', component: Step2Component},
      {path: 'step-3', component: Step3Component},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
