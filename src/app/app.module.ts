import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LuetteloComponent } from './luettelo/luettelo.component';
import { TuotetiedotComponent } from './tuotetiedot/tuotetiedot.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LuetteloComponent,
    TuotetiedotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    OrderModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/luettelo', pathMatch: 'full' },
      { path: 'luettelo', component: LuetteloComponent },
      { path: 'luettelo/:tiedot', component: TuotetiedotComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
