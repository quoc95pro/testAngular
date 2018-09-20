import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bootstrap-table',
  templateUrl: './test-bootstrap-table.component.html',
  styleUrls: ['./test-bootstrap-table.component.css']
})
export class TestBootstrapTableComponent implements OnInit {

  constructor() { }
  data = [
    {
      "apiFolderId" : "1",
      "nationality" : "a"
    },
    {
      "apiFolderId" : "2",
      "nationality" : "b"
    },
    {
      "apiFolderId" : "3",
      "nationality" : "c"
    }
  ]
  ngOnInit() {
  }

}
