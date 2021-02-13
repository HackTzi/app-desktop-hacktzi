import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  courses: Course[] = [
    {
      img: './../../../assets/images/ux.png',
      title: 'Curso avanzado de UX writting',
      teacher: 'Emiliano cosenza',
      color: 'primary'
    },
    {
      img: './../../../assets/images/vue.png',
      title: 'Curso de Vue.js',
      teacher: 'Samuel burbano',
      color: 'accent'
    },
    {
      img: './../../../assets/images/programatica.png',
      title: 'Curso programación programatica',
      teacher: 'Emiliano cosenza',
      color: 'warn'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
