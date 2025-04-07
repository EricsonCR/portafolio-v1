import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(
    private sharedService: SharedService,
    private fb: FormBuilder
  ) { }

  contactoForm!: FormGroup;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.sharedService.menu.subscribe(value => {
        this.scrollToSeccton(value);
      });
    } this.initContactoForm();
  }

  scrollToSeccton(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  initContactoForm() {
    this.contactoForm = this.fb.group({
      nombres: ["", Validators.required],
      email: ["", [Validators.required, Validators.email], [emailAsyncValidator]],
      asunto: ["", Validators.required],
      mensaje: [""]
    });
  }

  sendMessage() {
    this.mensaje();
    this.contactoForm.reset();
  }

  mensaje() {
    Swal.fire({
      title: "Email enviado",
      text: "Esto es solo una prueba, puede utilizar el link de whatsapp para contactar.",
      icon: "success"
    });
  }

}

export function emailAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  return of(control.value).pipe(
    delay(1000), // Simula llamada a API
    map(value => value === 'test@example.com' ? { emailTaken: true } : null)
  );
}
