import { Component, OnInit } from '@angular/core';
import { imageHero, imageInterface } from 'src/app/models/mediaInterface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: imageHero

  constructor() {
    this.heroInfo={
      image:[{
        srcn:'../../../assets/numbers/1.png',
        altn:'1',
        src:'../../../assets/images/Top10/1-papel.webp',
        alt:'pelicula1'
      },
      {
        srcn:'../../../assets/numbers/2.png',
        altn:'2',
        src:'../../../assets/images/Top10/2-reina.webp',
        alt:'pelicula2'
      },
      {
        srcn:'../../../assets/numbers/3.png',
        altn:'3',
        src:'../../../assets/images/Top10/3-titanes.webp',
        alt:'pelicula3'
      },
      {
        srcn:'../../../assets/numbers/4.png',
        altn:'4',
        src:'../../../assets/images/Top10/4-lostinspace.webp',
        alt:'pelicula4'
      },
      {
        srcn:'../../../assets/numbers/5.png',
        altn:'5',
        src:'../../../assets/images/Top10/5-dondecaben.webp',
        alt:'pelicula5'
      },
      {
        srcn:'../../../assets/numbers/6.png',
        altn:'6',
        src:'../../../assets/images/Top10/6-aquinohay.webp',
        alt:'pelicula6'
      },
      {
        srcn:'../../../assets/numbers/7.png',
        altn:'7',
        src:'../../../assets/images/Top10/7-blacklist.webp',
        alt:'pelicula6'
      },
      {
        srcn:'../../../assets/numbers/8.png',
        altn:'8',
        src:'../../../assets/images/Top10/8-ricos.webp',
        alt:'pelicula6'
      },
      {
        srcn:'../../../assets/numbers/9.png',
        altn:'9',
        src:'../../../assets/images/Top10/9-poder.webp',
        alt:'pelicula6'
      },
    ]
    }
   }

  ngOnInit(): void {
  }

}



