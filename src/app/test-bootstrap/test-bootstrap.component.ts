import { Component, OnInit } from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { MainServices } from "../services/main.services";
import { Idol } from '../_model/idol.model';


@Component({
  selector: 'app-test-bootstrap',
  templateUrl: './test-bootstrap.component.html',
  styleUrls: ['./test-bootstrap.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, MainServices]
})
export class TestBootstrapComponent implements OnInit {
  model1: Date;
  model2: Date;
  idol = new Idol();
  get today() {
    return new Date();
  }
  constructor(private ms : MainServices) { }

  ngOnInit() {
    this.getIdols();
    this.model1 = new Date("2018-07-04T18:00:00.000Z");
    this.model2 = new Date("2018-10-13T10:10:19.998Z");
  }

  click(){
    this.model2 = this.today;
  }

  getIdols(){
    this.ms.getTemp().then(
      temp => {
        this.idol = temp;
        console.log(this.idol.dob);
        
      })
  }

  editIdols(){
    this.idol.measurement.Bust = 90;
    this.idol.measurement.Waist = 60;
    this.idol.measurement.Hips = 90;
    this.ms.editTemp(this.idol).then(
      temp => {
        console.log(temp.status);
        this.getIdols();
      }
      
    )
  }
}
