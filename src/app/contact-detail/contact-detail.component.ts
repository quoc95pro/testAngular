import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  name = '';
  phoneNumber = '';
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      const id = params.get('id');
       this.name = params.get('name');
       this.phoneNumber = params.get('phoneNumber');
      console.log('id');
    })
  }

}
