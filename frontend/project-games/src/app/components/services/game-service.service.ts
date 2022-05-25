import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { game } from '../model/games.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  baseUrl= 'http://localhost:3001/games'
  secondaryUrl= 'https://xgvdasuxjuhiwdmtmiho.supabase.co/rest/v1/game-catalog'
  apikey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndmRhc3V4anVoaXdkbXRtaWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA4ODk2NzQsImV4cCI6MTk2NjQ2NTY3NH0.3q5akzY29uKWEi97mCAC_fLRMNnYt2TFLngiMWgwhcw'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  feedback(msg: string): void{
    this.snackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    } )
  }
    //localhost connections
  include(game: game):Observable<game>{
    return this.http.post<game>(this.baseUrl, game)
  }
  readGame():Observable<game[]>{
    return this.http.get<game[]>(this.baseUrl)

  }
  //supabase connections
  includeGAME(game: game):Observable<game>{
    const header = new HttpHeaders({'apikey': this.apikey})
    const options = {headers: header}
    return this.http.post<game>(this.secondaryUrl, game, options)
  }
  readGAME():Observable<game[]>{
    const header = new HttpHeaders({'apikey': this.apikey})
    const options = {headers: header}
    return this.http.get<game[]>(this.secondaryUrl, options)
  }


}
