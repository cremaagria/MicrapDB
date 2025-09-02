import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  nombre : string = 'Murcielago';
  precio : number = 5;
  imgSnoopy: string = "https://static.wixstatic.com/media/449abe_7b15686b2118476da4a733a7861dd772~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/sn-color.jpg"
  
  getFecha(): string{
    return new Date().toDateString();
  }
}
