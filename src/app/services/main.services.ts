import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { Idol } from "../_model/idol.model";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class MainServices{
    constructor(private http : Http){}

    editTemp(temp : Idol){
        const url = 'http://localhost:3000/api/idol';
        return this.http.put(url, temp)
        .toPromise()
        .then(res => res)
        //.then(resJson => resJson.main.temp)
    }

    getTemp(){
        const url = 'http://localhost:3000/api/idolById/5b49cd1668a4f80b243f8148';
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        //.then(resJson => resJson.main.temp)
    }

}