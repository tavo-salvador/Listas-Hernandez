import { Component, OnInit } from '@angular/core';
import { Materias } from '../models/materias.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  ListaMaterias: Materias [] = [
    new Materias(1,'Matematicas','Juan',9.567,true),
    new Materias(2,'Español','Pedro',7.3462,true),
    new Materias(3,'Historia','Miguel',6.26456,true),
    new Materias(4,'Inglés','Marcos',4.2662,false),
    new Materias(5,'Fisica','Jose',3.2645,false)
   ]

  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.ListaMaterias[2].calificacion = 4;
      this.ListaMaterias[2].status = !this.ListaMaterias[2].status;
    }, 5000);
  }

}
