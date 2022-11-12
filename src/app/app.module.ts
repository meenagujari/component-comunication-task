import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
