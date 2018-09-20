import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class UploadServices{
    constructor(private http : Http, private httpClient : HttpClient){}

    getTemp(cityName: string){
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=cb5b340e494a9846bf325b37dcd3bc56&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        //.then(resJson => resJson.main.temp)

    }

    getImage(file: File){
        // let header = new Headers();
        // let formData: FormData = new FormData();
        // formData.append('image', file);
        // //header.append('Authorization', 'Client-ID 0fe8fd718e47c32');
        // header.append('Authorization', 'Bearer 4f5aa0a7f10b625a741afff9e46be10da5da256e');
        // const url = 'https://api.imgur.com/3/image'
        // return this.http.post(url, formData ,{headers : header})
        // .toPromise()
        // .then(res => res.json())
        //.then(resJson => resJson.data.link)
    }

    

      PostImage(file: File){
        
          let header = new HttpHeaders();
        let formData: FormData = new FormData();
        formData.append('image', file);
        //header.append('Authorization', 'Client-ID 0fe8fd718e47c32');
        //header.append('Authorization', 'Bearer 4f5aa0a7f10b625a741afff9e46be10da5da256e');
        header.set('Authorization', 'Bearer 4f5aa0a7f10b625a741afff9e46be10da5da256e')
        const req = new HttpRequest('POST', 'https://api.imgur.com/3/image', formData, {
            headers : new HttpHeaders({ 'Authorization': 'Bearer 59a5e7b42b1dbd98a0d143440fd943a48cd5d12b' }),
            reportProgress: true,
          });

         return this.httpClient.request(req);
    }

    PostHttpClient(file : File){
        let formData: FormData = new FormData();
        formData.append('image', file);
       
        let httpOptions = {
            headers: new HttpHeaders({ 'Authorization': 'Bearer 59a5e7b42b1dbd98a0d143440fd943a48cd5d12b' })
          };
        return this.httpClient.post('https://api.imgur.com/3/image', file, httpOptions);
    }
}