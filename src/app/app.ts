import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, UsuariosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

}
