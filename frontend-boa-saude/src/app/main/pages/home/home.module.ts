import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
