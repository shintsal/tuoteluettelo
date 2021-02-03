import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-luettelo',
  templateUrl: './luettelo.component.html',
  styleUrls: ['./luettelo.component.css']
})
export class LuetteloComponent implements OnInit {
  phones: any[];
  term;
  order: string = '';
  
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.get<any[]>("../../assets/phones/phones.json").subscribe(
      (data) => {
        this.phones = data;
        console.log("phones:", this.phones)
      }
    )
  };

  selectChange(event:any) {
    this.order = event.target.value;
  }
}
