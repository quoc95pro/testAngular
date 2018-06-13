import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
    { path: 'contacts', component: ContactsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations: [
        ContactsComponent
    ]
})

export class ContactsModule {}