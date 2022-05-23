import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  @Input()
title: string | any;
@Input()
year: number | any;
@Input()
console: string | any;
@Input()
completed: boolean | any;
@Input()
date: string | any;
@Input()
notes: string | any;

today = new Date


  constructor() { }

  ngOnInit(): void {

  }

  howOld(a: number){
    const now = this.today.getFullYear();
    const old = now - a;
    return `${old} years old`;
  }

  booleanResult(a: boolean){
    if(a === true ){
      return 'Yes'
    }else{return 'No'}
  }
  dateStyle(a:string ){
   const date1 =  a.split('T', 1);
   return date1}

   boolean(a: boolean){
     if(a === true){
       return true
       }else{return false}
   }

}
