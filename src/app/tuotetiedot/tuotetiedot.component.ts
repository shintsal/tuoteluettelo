import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tuotetiedot',
  templateUrl: './tuotetiedot.component.html',
  styleUrls: ['./tuotetiedot.component.css']
})
export class TuotetiedotComponent implements OnInit {
  phoneId: string;
  phone: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.phoneId = params['tiedot'];
    })

    this.http.get<any>(`../../assets/phones/${this.phoneId}.json`).subscribe(data => {
      this.phone = data;
    })
  }
}
