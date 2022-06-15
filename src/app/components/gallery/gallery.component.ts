import { Component, OnInit } from '@angular/core';
import { imageGallery } from 'src/app/models/mediaInterface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public cardImage: imageGallery
  public cardImage2: imageGallery
  public cardImage3: imageGallery

  constructor() {
    this.cardImage={
      image:[{
        src:"../../../assets/images/Sci-fi/12monos.webp",
        alt:"12 monos"
      },
      {
        src:"../../../assets/images/Sci-fi/6dia.webp",
        alt:"6 dia"
      },
      {
        src:"../../../assets/images/Sci-fi/afterearth.webp",
        alt:"after earth"
      },
      {
        src:"../../../assets/images/Sci-fi/colverparadox.jpg",
        alt:"colver paradox"
      },
      {
        src:"../../../assets/images/Sci-fi/core.webp",
        alt:"core"
      },
      {
        src:"../../../assets/images/Sci-fi/deepimpact.webp",
        alt:"deep impact"
      },
      {
        src:"../../../assets/images/Sci-fi/doom.webp",
        alt:"doom"
      },
      {
        src:"../../../assets/images/Sci-fi/gits.webp",
        alt:"gits"
      },
      {
        src:"../../../assets/images/Sci-fi/jumper.webp",
        alt:"jumper"
      },
      {
        src:"../../../assets/images/Sci-fi/passengers.webp",
        alt:"passengers"
      },
      {
        src:"../../../assets/images/Sci-fi/startrek.webp",
        alt:"startrek"
      },
      {
        src:"../../../assets/images/Sci-fi/transformers.webp",
        alt:"transformers"
      }]

    }

    this.cardImage2={
      image:[{
        src:"../../../assets/images/Accion/ejercitomuertos.jpg",
        alt:"12 monos"
      },
      {
        src:"../../../assets/images/Accion/elprotector.webp",
        alt:"6 dia"
      },
      {
        src:"../../../assets/images/Accion/equalizer2.webp",
        alt:"after earth"
      },
      {
        src:"../../../assets/images/Accion/heat.webp",
        alt:"colver paradox"
      },
      {
        src:"../../../assets/images/Accion/jackreacher.webp",
        alt:"core"
      },
      {
        src:"../../../assets/images/Accion/johnwick2.webp",
        alt:"deep impact"
      },
      {
        src:"../../../assets/images/Accion/killbill2.webp",
        alt:"gits"
      },
      {
        src:"../../../assets/images/Accion/misionimposiblenacion.webp",
        alt:"jumper"
      },
      {
        src:"../../../assets/images/Accion/renacido.webp",
        alt:"passengers"
      },
      {
        src:"../../../assets/images/Accion/terminator2.webp",
        alt:"startrek"
      },
      {
        src:"../../../assets/images/Accion/worldwarz.webp",
        alt:"transformers"
      }]
    }
    this.cardImage3={
      image:[{
        src:"../../../assets/images/Drama/1917.webp",
        alt:"12 monos"
      },
      {
        src:"../../../assets/images/Drama/arrival.webp",
        alt:"6 dia"
      },
      {
        src:"../../../assets/images/Drama/clublucha.webp",
        alt:"after earth"
      },
      {
        src:"../../../assets/images/Drama/corazones.webp",
        alt:"colver paradox"
      },
      {
        src:"../../../assets/images/Drama/culpable.jpg",
        alt:"core"
      },
      {
        src:"../../../assets/images/Drama/millaverde.webp",
        alt:"deep impact"
      },
      {
        src:"../../../assets/images/Drama/naufrago.webp",
        alt:"doom"
      },
      {
        src:"../../../assets/images/Drama/noespais.web",
        alt:"gits"
      },
      {
        src:"../../../assets/images/Drama/salvaralsoldado.webp",
        alt:"jumper"
      },
      {
        src:"../../../assets/images/Drama/scarface.webp",
        alt:"passengers"
      },
      {
        src:"../../../assets/images/Drama/schindler.webp",
        alt:"startrek"
      },
      {
        src:"../../../assets/images/Drama/sombradiablo.webp",
        alt:"transformers"
      }]
    }

   }

  ngOnInit(): void {
  }

}
