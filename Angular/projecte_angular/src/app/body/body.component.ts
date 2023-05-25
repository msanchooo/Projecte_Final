import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {

  ngAfterViewInit() {
    var splide= new Splide('.splide', {
      type: 'loop', // Configura el tipo de carrusel como "slide"
      perPage: 1, // Muestra una sola diapositiva a la vez
      pagination: false, // Desactiva la paginación si no la necesitas
      cover: true,
      heightRatio: 0.5,
      autoplay: true,
      interval: 3000, // Cambia el slide cada 5 segundos
    }).mount();


  }
  slides = [
    {
      title: 'Expertos en el cuidado de tu coche',
      description: 'El taller de coches que cuida de tu vehículo como nadie más lo hace',
      image: '../assets/img/car1.jpg'
    },
    {
      title: 'Reparaciones de calidad',
      description: 'Confía en nuestros expertos para reparar cualquier problema en tu coche con calidad y precisión.',
      image: '../assets/img/car2.jpg'
    },
    {
      title: 'Mantenimiento preventivo',
      description: 'Mantén tu coche en excelentes condiciones con nuestros servicios de mantenimiento preventivo personalizados',
      image: '../assets/img/car3.jpg'
    },
    {
      title: 'Especialistas en diagnóstico',
      description: 'Contamos con la última tecnología y conocimientos para realizar diagnósticos precisos y resolver cualquier fallo en tu vehículo.',
      image: '../assets/img/car4.jpg'
    }
  ];

}
