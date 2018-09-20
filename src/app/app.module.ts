import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { TestServicesComponent } from './test-services/test-services.component';
import { UploaderComponent } from './uploader/uploader.component';
import { AppRoutingModule } from './app-routing.module';
import { HookComponent } from './hook/hook.component';
import { TestBootstrapTableComponent } from './test-bootstrap-table/test-bootstrap-table.component';
import { TestBootstrapComponent } from './test-bootstrap/test-bootstrap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestServicesComponent,
    UploaderComponent,
    HookComponent,
    TestBootstrapTableComponent,
    TestBootstrapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PageNotFoundModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule, 
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
