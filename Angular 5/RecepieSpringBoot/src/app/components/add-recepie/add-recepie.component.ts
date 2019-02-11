import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RecipieService} from '../../recipie.service';
import {Recipie} from '../../models/Recipie';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-recepie',
  templateUrl: './add-recepie.component.html',
  styleUrls: ['./add-recepie.component.css']
})
export class AddRecepieComponent implements OnInit {

  constructor( private  flashMessages: FlashMessagesService,
    private recipieService:RecipieService,
    private router:Router
                                  ) { }

  @ViewChild('recipieForm') form: any;

  onSubmit({value,valid}:{value:Recipie,valid:boolean}){

  
    if(!valid){
      //show err
      this.flashMessages.show('Please fill the form Correctly',{cssClass:'alert-danger',timeout:4000});
    }else{
      //add new client
      this.recipieService.saveRecipie(value).subscribe( data => {
        //show messages
      this.flashMessages.show('New Recipie Added',{cssClass:'alert-success',timeout:4000});
      //redirect to dash
      this.router.navigate(['/']);

      },err=>{
        this.flashMessages.show('Server Error Could not Save Recipie',{cssClass:'alert-danger',timeout:4000});
      });
      
    }
  }

  ngOnInit() {
  }

  recipie:Recipie = {
    recipieName:'',
    ingredient1:'',
    ingredient2:'',
    ingredient3:'',
    ingredient4:'',
  }




}


