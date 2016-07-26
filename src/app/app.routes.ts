import { RouterConfig } from '@angular/router';
import { Home } from './home.component';
import { About } from './about.component';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];