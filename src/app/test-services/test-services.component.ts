import { Component, OnInit } from '@angular/core';
import { WeatherServices } from './test-services.services';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css'],
  providers: [WeatherServices]
})
export class TestServicesComponent implements OnInit {
   txtCity = '';
   cityName = '';
   temp = null;
   link = '';
   fileUpload : File = null;
  constructor( private weatherServices: WeatherServices) { }

  ngOnInit() {}

  getWeather(){
    this.weatherServices.getTemp(this.txtCity)
    .then(temp => {
      this.cityName = this.txtCity;
      this.temp = temp;
      console.log(temp);
      
    })
    .catch(err => console.log(err));
  }

  getImage(){
    this.weatherServices.getImage('')
    .then(link => {
      this.link = link;
      console.log(link);
      
    })
    
  }

  fileInfo(){
    console.log(this.fileInfo.caller);
    
  }
}
