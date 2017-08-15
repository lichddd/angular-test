import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'main-list',
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})
export class MainListComponent implements OnInit {
  title = 'bbb';
  desc = 'bbbbbbb';
  list=[];

  constructor(private http: HttpClient) { }




  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('search?q=%E5%90%8C%E6%80%A7&pageSize=999999&parentChannelId=63&sortField=releaseDate').subscribe(data => {
      // Read the result field from the JSON response.
      this.list = data["data"].page.list;
    });
  }
}
