import { Component, OnInit } from '@angular/core';
import {RecipieService} from '../../recipie.service';
import {Recipie} from '../../models/Recipie';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {


  constructor( private  flashMessages: FlashMessagesService,
    private recipieService : RecipieService) { }

  recipies:Recipie[];

  ngOnInit() {

    this.recipieService.getRecipie().subscribe(recipies=>{
      this.recipies = recipies},(err) => {
        console.log(err);
        this.flashMessages.show('Unable to Connect with Server',{cssClass:'alert-danger',timeout:4000});
    });

  }



}
