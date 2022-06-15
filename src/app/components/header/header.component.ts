import { Component, OnInit } from '@angular/core';
import { navigatorInterface } from 'src/app/models/mediaInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public btnText: string= "☀️"
  public navigatorInfo: navigatorInterface;
  constructor() {
    this.navigatorInfo = {
      logo: {
        src: '../../../assets/nitflex.png',
        alt: 'nitflex logo',
      },
      links: [{
        texto: 'Home',
        link: '#home',
      },
      {
        texto: 'TV Shows',
        link: '#TV Shows',
      },
      {
        texto: 'Movies',
        link: '#Movies',
      },
      {
        texto: 'New & Popular',
        link: '#New & Popular',
      },
      {
        texto: 'My List',
        link: '#My List',
      }
    ]
    };
  }
  ngOnInit(): void {}

  public cambiarColor(): void{
    document.body.classList.toggle("dia");
    this.btnText==="☀️"? this.btnText = "🌒": this.btnText="☀️"
  }
}
