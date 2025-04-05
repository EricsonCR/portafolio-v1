import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component implements OnInit, OnDestroy {

  private menuSubscription!: Subscription;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.menuSubscription = this.sharedService.menu.subscribe(value => {
      this.scrollToSeccton(value);
    });
  }

  scrollToSeccton(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
    console.log("obs destroy");
  }

}
