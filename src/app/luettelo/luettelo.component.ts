import { Component, OnInit } from '@angular/core';
import { phones } from '../../assets/phones/phones';

@Component({
  selector: 'app-luettelo',
  templateUrl: './luettelo.component.html',
  styleUrls: ['./luettelo.component.css']
})
export class LuetteloComponent implements OnInit {
  phones = phones;
  term;
  order: string = '';
  
  constructor() {
    console.log()
   }

  ngOnInit(): void {
  }

  selectChange(event:any) {
    this.order = event.target.value;
  }

}
