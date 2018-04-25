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
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { PhoneNumberValidatorDirective } from './shared/validators/phone-number.directive';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';
import { DynamicFormExampleService } from './pages/dynamic-form-example/dynamic-form-example.service';
import { DynamicFormExampleComponent } from './pages/dynamic-form-example/dynamic-form-example.component';
import { MatDynamicFormComponent } from './formizable/components/mat-dynamic-form/mat-dynamic-form.component';
import { QuestionControlService } from './formizable/question/question-control.service';
import { DynamicFormExample2Component } from './pages/dynamic-form-example-2/dynamic-form-example-2.component';
import { DynamicFormExample1Component } from './pages/dynamic-form-example-1/dynamic-form-example-1.component';
import { DynamicFormGeneratorComponent } from './pages/dynamic-form-generator/dynamic-form-generator.component';
import { HttpModule } from '@angular/http';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './pages/login/login.component';
import { QuestionGeneratorComponent } from './pages/dynamic-form-generator/question-generator/question-generator.component';
import { AuthGuard } from './guards/auth.guard';
import { DynamicFormExample3Component } from './pages/dynamic-form-example-3/dynamic-form-example-3.component';
import { FormizableFormComponent } from './formizable/components/formizable-form/formizable-form.component';
import { JsonPublicPipe } from './shared/pipes/json-public';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';
import { MatDynamicFormQuestionComponent } from './formizable/components/mat-dynamic-form-question/mat-dynamic-form-question.component';
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
    TemplateFormExampleComponent,
    ReactiveFormExampleComponent,
    DynamicFormExampleComponent,
    DynamicFormExample1Component,
    DynamicFormExample2Component,
    DynamicFormExample3Component,
    // dynamic form question component
    MatDynamicFormArrayComponent,
    MatDynamicFormComponent,
    MatDynamicFormGroupComponent,
    MatDynamicFormQuestionComponent,
    DynamicFormGeneratorComponent,
    QuestionGeneratorComponent,
    FormizableFormComponent,


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
    QuestionControlService,
    DynamicFormExampleService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
