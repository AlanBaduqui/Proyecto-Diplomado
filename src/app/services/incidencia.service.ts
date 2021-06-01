import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incidencia } from '../model/incidencia';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  private URL = 'https://backend-proyecto-app.herokuapp.com/api/incidencias'

  selectedIncidencia: Incidencia = {
    nombre: '',
    admi: '',
    problem: '',
    descri: '',
  };

  incidencias: Incidencia[] = [];

  constructor(private http: HttpClient) {}
  getIncidencias() {
    return this.http.get<Incidencia[]>(this.URL);
  }

  createIncidencia(incidencia: Incidencia) {
    return this.http.post(this.URL, incidencia);
  }

  putIncidencia(incidencia: Incidencia) {
    return this.http.put(`${this.URL}/${incidencia._id}`, incidencia);
  }

  deleteIncidencia(_id: string) {
    return this.http.delete(`${this.URL}/${_id}`);
  }
}
