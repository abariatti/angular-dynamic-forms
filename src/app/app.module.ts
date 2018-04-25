import { ProductComponent } from './pages/product/product.component';
import { MatDynamicFormArrayComponent } from './formizable/components/mat-dynamic-form-array/mat-dynamic-form-array.component';
import { MatDynamicFormGroupComponent } from './formizable/components/mat-dynamic-form-group/mat-dynamic-form-group.component';
import { ParseInterceptor } from './helpers/parse.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ThemePickerModule } from './shared/theme-picker';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhoneNumberValidatorDirective } from './shared/validators/phone-number.directive';
import { MatDynamicFormComponent } from './formizable/components/mat-dynamic-form/mat-dynamic-form.component';
import { HttpModule } from '@angular/http';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FormizableFormComponent } from './formizable/components/formizable-form/formizable-form.component';
import { JsonPublicPipe } from './shared/pipes/json-public';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';
import { MatDynamicFormQuestionComponent } from './formizable/components/mat-dynamic-form-question/mat-dynamic-form-question.component';
import { ProductService } from './services/product.service';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // pipes
    JsonPublicPipe,
    // directives
    PhoneNumberValidatorDirective,
    // components
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ThemePickerModule,
    EcoFabSpeedDialModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ParseInterceptor,
        multi: true
    },
    ProductService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
