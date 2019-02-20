import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import {AppRouters} from './app.routes';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data/data.service';
import { AuthService } from './auth.service';
import {FormsModule} from '@angular/forms';
import { PostDialogComponent } from './post-dialog/post-dialog.component';


@NgModule({
  entryComponents: [
    PostDialogComponent
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
