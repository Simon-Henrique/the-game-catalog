import { GameServiceService } from './../services/game-service.service';
import { Component, OnInit } from '@angular/core';
import { game } from '../model/games.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-games-include',
  templateUrl: './games-include.component.html',
  styleUrls: ['./games-include.component.css']
})
export class GamesIncludeComponent implements OnInit {

  game: game = {
    title:'',
    year: 0,
    console: '',
    completed: true,
    date_of_completion: new Date(),
    personal_notes: ''
  }
  today = new Date
  thisYear = this.today.getFullYear()
  consoles = ["PS4", "XBOX ONE", "NINTENDO SWITCH","PS3","XBOX 360","NINTENDO WII",
"PS2","XBOX","GAME CUBE","PS1","NINTENDO 64","SNES"]
  constructor(private gameserviceservice: GameServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  isText(a: string){
    if (a.length >= 2) {
      return true
    }else{ return false}
    }
  isValidYear(a: number){
    if (a >= 1950 && a <= this.thisYear) {
      return true
    }else{return false}
  }

  includeGame(){
    if(this.isText(this.game.title) && this.isText(this.game.console) && this.isValidYear(this.game.year)) {
      const lower = this.game.title.toLowerCase();
      this.game.title = lower
      this.gameserviceservice.includeGAME(this.game).subscribe(() => {
        this.gameserviceservice.feedback('Success');
        this.router.navigate(['/'])
        console.log(this.game)
      })
    } else [
      this.gameserviceservice.feedback('Please, check the informations and try again.'),
    ]

  }
  cancel():void{
    this.router.navigate(['/'])
  }

}
