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
  usuarios: Usuarios[] = [

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
    },
    {
      "id": 6,
      "nombre": "Sebastian Contreras",
      "codigo": "2021*******",
      "correo": "s-contreras-@udistrital.edu.co",
      "cargo": "Estudiante Lider"
    },
    {
      "id": 7,
      "nombre": "Laura Valentina Dueñas",
      "codigo": "2022*******",
      "correo": "lvdueñas-@udistrital.edu.co",
      "cargo": "Estudiante"
    },
    {
      "id": 8,
      "nombre": "michael ruiz",
      "codigo": "2022*******",
      "correo": "m-ruiz-@udistrital.edu.co",
      "cargo": "Estudiante"
    },
    {
      "id": 9,
      "nombre": "luz andrea garcia caycedo",
      "codigo": "***********",
      "correo": "lagraciac-@udistrital.edu.co",
      "cargo": "Docente Lider"
    },





  ]

}
