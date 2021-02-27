import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp11Component } from './comp11/comp11.component';

@NgModule({
  declarations: [ Comp11Component],
  imports: [
    CommonModule
  ]
})
export class Mod1Module { }

//#toDo *
/*
добавить mod1 routing
в mod1 routing RouterModule.forChild([#toDo])
описать объект в forChild
добавить в mod1.component.html <router-outlet></router-outlet>
*/