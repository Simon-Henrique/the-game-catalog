import { GameServiceService } from './../services/game-service.service';
import { Component, OnInit } from '@angular/core';
import { game } from '../model/games.model';


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: game[] = [];
  private setGames: game[] = [];
  filterGame: Boolean = false;

  constructor(private Gameserviceservice: GameServiceService) { }

  ngOnInit(): void {
    this.Gameserviceservice.readGAME().subscribe(games => {
      this.setGames = games;
      this.games = this.setGames
    })
  }

  search(value: string){
    if(value.length != 0){
    const searchResult = this.setGames.filter((sgame) => {return !sgame.title.indexOf(value.toLowerCase())}  );
    this.games = searchResult
    }else{this.games = this.setGames}
}

completedFilter(){
  console.log(this.filterGame)
  if(this.filterGame == true){
    const filterResult = this.setGames.filter((fgame) => {return fgame.completed == true});
     this.games = filterResult
  }else{
    this.games = this.setGames
  }

}}
