import { Injectable } from '@angular/core';
import { Http, Headers, Response,  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class WeatherServices{
    constructor(private http : Http){}

    getTemp(cityName: string){
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=cb5b340e494a9846bf325b37dcd3bc56&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        //.then(resJson => resJson.main.temp)

    }

    getImage(img: string){
        let header = new Headers({ 'Content-Type': 'application/json' });
        header.append('Authorization', 'Client-ID 0fe8fd718e47c32');
        const url = 'https://api.imgur.com/3/image/kkRCxRa'
        return this.http.get(url, {headers : header})
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.data.link)
    }

    base64Test(){
        return atob('password');
    }
}