import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {HttpClient} from '@angular/common/http'
import { game } from '../model/games.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  baseUrl= 'http://localhost:3001/games'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  feedback(msg: string): void{
    this.snackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    } )
  }

  include(game: game):Observable<game>{
    return this.http.post<game>(this.baseUrl, game)
  }
  readGame():Observable<game[]>{
    return this.http.get<game[]>(this.baseUrl)

  }
}
