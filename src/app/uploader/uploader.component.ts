import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { UploadServices } from './uploader.services'

import $ from 'jquery/dist/jquery.min';


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
  constructor(private title: Title, private uploadServices : UploadServices) { }
  ngOnInit() {
    this.title.setTitle("Angular 4 - Upload file"); 
  }
  doUploadFile() {
    this.uploadResult.progress = 0;
    this.uploadResult.fileUrl = null;
    this.uploadResult.uploadingText = this.uploadingText;
    $("#fileUploadInput").trigger("click");
  }
   async fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
     


      // let formData: FormData = new FormData();
      // formData.append('uploadFile', file);
      // let xhr: XMLHttpRequest = new XMLHttpRequest();
      // xhr.withCredentials = false;
      // xhr.onreadystatechange = () => {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {
      //       let json = JSON.parse(xhr.response);
      //       let fileUrl = 'http://minhquandalat.com/uploads/' + json.Name;
      //       this.uploadResult.progress = 100;
      //       this.uploadResult.fileUrl = fileUrl;
      //       this.uploadResult.uploadingText = "Hoàn thành";

      //     } else {
      //       console.log(xhr.response);
      //     }
      //   }
      // };
      // xhr.upload.onprogress = (event) => {
      //   this.uploadResult.uploadingText = "Đang tải ảnh lên...";
      //   let percentVal = Math.round(event.loaded / event.total * 100);
      //   this.uploadResult.progress = percentVal;
      // };
      // xhr.open('POST', "http://minhquandalat.com/api/FileUpload", true);
      // xhr.send(formData);
      var link = [];
        for (let index = 0; index < fileList.length; index++) {
        let file: File = fileList[index];
        //console.log(fileList[index].name+': '+ fileList[index].size);
        await this.uploadServices.getImage(file)
      .then(res => {
         if(res.status===200){
            this.uploadResult.progress = 100;
            this.uploadResult.fileUrl = res.data.link;
            this.uploadResult.uploadingText = "Hoàn thành";
            link.push(res.data.link);
        }
        else{
          console.log('err');
          
        }
          
      })
        
      }
      
      console.log(link);
      
      
      // this.uploadServices.getImage(file)
      // .then(res => {
      //   if(res.status===200){
      //       this.uploadResult.progress = 100;
      //       this.uploadResult.fileUrl = res.data.link;
      //       this.uploadResult.uploadingText = "Hoàn thành";
      //   }
      //   else{
      //     console.log('err');
          
      //   }
          
      // })
    }
  }
}