import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand name">
      <img src="/assets/logo-black.svg" alt="logo" aria-hidden="true"
          width="100">
    </header>
    <section class="content">
      <app-home>
      </app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-angular';
}
