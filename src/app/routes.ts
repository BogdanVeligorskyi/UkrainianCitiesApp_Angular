import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Міста України | Головна'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Міста України | Детальна інформація'
    }
];

export default routeConfig;