import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  peliculasEnCines:any;
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines=[
        {
         titulo:'Spider-Man',
         fechaLanzamiento: new Date(),
         precio:1400.99,
         poster:'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg',
        },
        {
         titulo:'Venom',
         fechaLanzamiento: new Date('2021-02-01'),
         precio:1800.99,
         poster:'https://upload.wikimedia.org/wikipedia/en/1/18/Venom_%282018_film_poster%29.png',
        }
       ]   
      
    }, 500);    
  }
  peliculasProximosEstrenos=[];

}
