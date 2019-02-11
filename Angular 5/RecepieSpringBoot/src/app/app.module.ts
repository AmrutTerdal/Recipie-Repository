import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/Forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AppRoutingModule} from './app-routing.module';


import {AddRecepieComponent} from './components/add-recepie/add-recepie.component'
import { AppComponent } from './app.component';
import { RecepieListComponent } from './components/recepie-list/recepie-list.component';
import { RecepieComponent } from './components/recepie/recepie.component';
import {RecipieService} from './recipie.service';
import { ComponentsNavComponent } from './components-nav/components-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    RecepieListComponent,
    RecepieComponent,
    ComponentsNavComponent,
    AddRecepieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [RecipieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
