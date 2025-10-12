import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../interfaces/usuarios';



@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuariosComponent { 
  usuarios: Usuarios[] =[

  {
    "id": 1,
    "nombre": "Andrés Felipe Zaraza Robles",
    "codigo": "20212109020",
    "correo": "afzarazar@udistrital.edu.co ",
    "cargo": "curador"
  },
  {
    "id": 2,
    "nombre": "Laura Isabel Ramirez",
    "codigo": "202221090**",
    "correo": "liramirezl@udistrital.edu.co",
    "cargo": "curador"
  },
  {
    "id": 3,
    "nombre": "Andrés Felipe Rincon ",
    "codigo": "202121090**",
    "correo": "afrinconr-@udistrital.edu.co",
    "cargo": "curador"
  },
  {
    "id": 4,
    "nombre": "Cristal serena",
    "codigo": "202421090**",
    "correo": "diego.martinez@empresa.com",
    "cargo": "curador"
  },
  {
    "id": 5,
    "nombre": "Andrés Felipe Guerra",
    "codigo": "2021*******",
    "correo": "afguerra-@udistrital.edu.co",
    "cargo": "Lider de curaduria"
  }
]
    
}
