import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { UploadServices } from './uploader.services'
import { HttpEventType, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import $ from 'jquery/dist/jquery.min';
import { ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [UploadServices]
})
export class UploaderComponent implements OnInit {
  uploadingText = 'Chọn file (chỉ chấp nhận file ảnh)';
  uploadResult: any = {
    progress: 0,
    uploadingText: this.uploadingText,
    fileUrl: null
  }

  @ViewChild('fileUploadInput')
  myInputVariable: ElementRef;

  current = 0;

  arrUploadResult = [];

  enableBootstrap = true;
  constructor(private title: Title, private uploadServices : UploadServices, private toastr: ToastrService, private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'bootstrap');
  }
  ngOnInit() {
    this.title.setTitle("Angular 4 - Upload file"); 
  }
  doUploadFile() {
    console.log("ssss"+this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    console.log(this.myInputVariable.nativeElement.files);
    this.uploadResult.progress = 0;
    this.uploadResult.fileUrl = null;
    this.uploadResult.uploadingText = this.uploadingText;
    $("#fileUploadInput").trigger("click");
  }
    fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
     
      var link = [];
        for (let index = 0; index < fileList.length; index++) {
        let file: File = fileList[index];
        this.arrUploadResult.push({
          progress: 0,
          uploadingText: this.uploadingText,
          fileUrl: null
        });

         this.uploadServices.PostImage(file).subscribe(event => {
         
          if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            this.arrUploadResult[index].progress = percentDone;           
            this.uploadResult.progress =  this.current + Math.round(100 * event.loaded / event.total / fileList.length);
          } else if (event instanceof HttpResponse) {
            
            
            
            let a  = JSON.parse(JSON.stringify(event.body));
            console.log(a);
            
            this.toastr.success(`upload success with ${a.data.id}`, 'message',{
              timeOut: 7000,
              closeButton : true,
              progressBar : true,
              progressAnimation : 'increasing',
              tapToDismiss : true
            });
            this.uploadResult.progress = this.current += Math.round(100 / fileList.length);
            console.log(this.current);
            
          } 
         
        }, err => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            
            let a  = JSON.parse(JSON.stringify(err));
            this.toastr.error(`upload error ${a.error.data.error.message}`, 'message',{
              timeOut: 7000,
              closeButton : true,
              progressBar : true,
              progressAnimation : 'increasing',
              tapToDismiss : true
            });
          } 
        });

        
      }
    }
  }
}