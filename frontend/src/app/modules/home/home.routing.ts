import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const landingHomeRoutes: Route[] = [
    {
        path     : '',
        component: HomePageComponent
    }
];
