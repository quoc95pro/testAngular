import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactsModule } from './contacts/contacts.module';
import { TestBootstrapComponent } from "./test-bootstrap/test-bootstrap.component";


import { ContactDetailComponent } from './contact-detail/contact-detail.component';
 import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
    {path: 'details/:id/:name/:phoneNumber', component: ContactDetailComponent},
    {path: 'bootstrap', component: TestBootstrapComponent},
    {path: '', redirectTo: '/contacts', pathMatch: 'full'},
     {path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
      imports: [
        ContactsModule,
        RouterModule.forRoot(routesConfig),
        CommonModule  
      ],
      declarations:[
          ContactDetailComponent
      ],
      exports: [RouterModule]
  })

  export class AppRoutingModule { }