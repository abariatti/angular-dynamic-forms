import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { DynamicFormExampleComponent } from './pages/dynamic-form-example/dynamic-form-example.component';
import { DynamicFormExample2Component } from './pages/dynamic-form-example-2/dynamic-form-example-2.component';
import { DynamicFormExample1Component } from './pages/dynamic-form-example-1/dynamic-form-example-1.component';
import { DynamicFormGeneratorComponent } from './pages/dynamic-form-generator/dynamic-form-generator.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DynamicFormFormizableComponent } from './pages/dynamic-form-formizable/dynamic-form-formizable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard]  },
  { path: 'template-form-example', component: TemplateFormExampleComponent },
  { path: 'reactive-form-example', component: ReactiveFormExampleComponent },
  { path: 'dynamic-form-example', component: DynamicFormExampleComponent },
  { path: 'dynamic-form-example-1', component: DynamicFormExample1Component },
  { path: 'dynamic-form-example-2', component: DynamicFormExample2Component },
  { path: 'dynamic-form-formizable', component: DynamicFormFormizableComponent },
  { path: 'dynamic-form-generator', component: DynamicFormGeneratorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
