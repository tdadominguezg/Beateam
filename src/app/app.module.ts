import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { ListTableComponent } from './components/list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFilterComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
