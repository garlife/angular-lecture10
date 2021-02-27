import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lecture10';

  constructor(private router: Router) {}

  goMod1(): void {
    this.router.navigate(['mod1']);
  }
  goMod2(): void {
    this.router.navigate(['mod2']);
  }
  goMod3(): void {
    this.router.navigate(['mod3']);
  }

  goMod1423(): void {
    this.router.navigate(['mod1', '4', '5', '50'], { queryParams: { q1: 2 } });
  }

  goMod14550(): void {
    this.router.navigate(['mod1', '4', '2', '3'], { queryParams: { q1: 2 } });
  }
}
