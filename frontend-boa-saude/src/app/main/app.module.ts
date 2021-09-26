import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './../core/core.module';
import { InfraModule } from './../infrastructure/infra.module';
import { PresentationModule } from './../presentation/presentation.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layout/full/full.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    NgbModule,
    HttpClientModule,
    InfraModule,
    CoreModule,
    PresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
