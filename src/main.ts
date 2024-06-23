import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

platformBrowserDynamic().bootstrapModule(AppModule,
  providers: [provideRouter(routes)]
)
  .catch(err => console.error(err));
