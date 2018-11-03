import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';




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
    CreateQoqaComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
