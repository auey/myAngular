import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MyfavoriteComponent } from './components/myfavorite/myfavorite.component';
import { FormsModule } from '@angular/forms'
import { GetphotoService } from './services/getphoto.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from "@angular/router" //เพิ่ม

const appRoutes:Routes = [
  {path:"", component:UserComponent},
  {path:"about", component:AboutmeComponent},
  {path:"myfav",component:MyfavoriteComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutmeComponent,
    MyfavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //เพิ่ม
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
