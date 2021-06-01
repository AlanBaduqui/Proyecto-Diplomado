import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'https://backend-proyecto-app.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getTasks(){
    
  }

}
