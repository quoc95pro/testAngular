import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';

const routesConfig: Routes = [
    { path: 'contacts', component: ContactsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        PageNotFoundModule,
        
        RouterModule.forChild(routesConfig),
       
    ],
    declarations: [
        ContactsComponent
        
    ]
})

export class ContactsModule {}