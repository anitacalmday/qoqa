import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { CreateQoqaComponent } from './create-qoqa/create-qoqa.component';

import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { LoginComponent } from './login/login.component';
import {AllMaterialModule} from './material-module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    EventsComponent,
    ProfileComponent,
    SavedEventsComponent,
    InvitationsComponent,
    CreateQoqaComponent,
    AppMainNavComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    LayoutModule,
    AllMaterialModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
