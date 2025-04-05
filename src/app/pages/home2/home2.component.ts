import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component implements OnInit {

  private menuSubscription!: Subscription;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.menuSubscription = this.sharedService.menu.subscribe(value => {
        this.scrollToSeccton(value);
      });
    }
  }

  scrollToSeccton(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
