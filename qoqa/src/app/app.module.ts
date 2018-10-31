import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { CreateQoqaComponent } from './create-qoqa/create-qoqa.component';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

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
    AppMainNavComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
