import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Incidencia } from 'src/app/model/incidencia';
import { IncidenciaService } from 'src/app/services/incidencia.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
})
export class IncidenciaComponent implements OnInit {
  constructor(public incidenciaService: IncidenciaService) {}

  ngOnInit(): void {
    this.getIncidencias();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getIncidencias() {
    this.incidenciaService.getIncidencias().subscribe(
      (res) => {
        this.incidenciaService.incidencias = res;
      },
      (err) => console.error(err)
    );
  }

  addIncidencia(form: NgForm) {
    if(form.value._id){
      this.incidenciaService.putIncidencia(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }else {
      this.incidenciaService.createIncidencia(form.value).subscribe(
        (res) => {
          this.getIncidencias();
          form.reset();
        },
        (err) => console.error(err)
      );
    }
  }

  deleteIncidencia(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.incidenciaService.deleteIncidencia(id).subscribe(
        (res) => {
          this.getIncidencias();
        },
        (err) => console.error(err)
      );
    }
  }

  editIncidencia(incidencia: Incidencia) {
    this.incidenciaService.selectedIncidencia = incidencia;
  }

}
