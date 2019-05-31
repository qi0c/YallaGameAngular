import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { LocationPageComponent } from './Components/location-page/location-page.component';
import { AuthLoginService } from './services/auth-login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeFiltrationContainerComponent } from './Components/home-filtration-container/home-filtration-container.component'; 
import { MatComponentsModule } from './mat-components/mat-components.module';
// import { HttpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LocationPageComponent,
    HomeFiltrationContainerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'location', component:LocationPageComponent}
    ]),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentsModule

    
  ],
  providers: [AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
