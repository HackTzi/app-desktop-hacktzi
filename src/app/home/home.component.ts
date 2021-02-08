import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  keep_learning = [
    { thumbnail: '', avatar: '', course: 'Big Data', title: 'Curso de base de datos' },
    { thumbnail: '', avatar: '', course: 'Como funciona react?', title: 'Curso de Front end con react.js' },
    { thumbnail: '', avatar: '', course: 'Profesor: Emilio Consenza', title: 'Curso avanzado de UX Writing' }
  ];

  whats_new = [
    { avatar: '', professor: 'Emiliano Consenza', title: 'Curso avanzado de UX Writing', badge: 'Nuevo' },
    { avatar: '', professor: 'Samuel Burbano', title: 'Curso de Vue.js 3', badge: 'Nuevo' },
    { avatar: '', professor: 'Emiliano Consenza', title: 'Curso de programacion programatica', badge: 'Nuevo' },
  ];

  ngOnInit(): void { }

}
