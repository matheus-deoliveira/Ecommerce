import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent, loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule) },
    { path: 'shop/:id', component: ProductDetailsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
