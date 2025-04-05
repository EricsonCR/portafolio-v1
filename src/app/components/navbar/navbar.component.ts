import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private sharedService: SharedService
  ) { }

  scrollToSeccton(id: string) {
    this.sharedService.updateMenu(id);
  }

  cerrarMenu(): void {
    const navbar = document.querySelector('.navbar-collapse.show'); // Selecciona solo si está abierto
    if (navbar) {
      (navbar as HTMLElement).classList.remove('show'); // Cierra el menú
    }
  }

}
