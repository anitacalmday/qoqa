import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { CreateQoqaComponent } from "./create-qoqa/create-qoqa.component";
import { EventsComponent } from "./events/events.component";
import { InvitationsComponent } from "./invitations/invitations.component";
import { ProfileComponent } from "./profile/profile.component";
import { SavedEventsComponent } from "./saved-events/saved-events.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'create-qoqa', component: CreateQoqaComponent },
  { path: 'events', component: EventsComponent },
  { path: 'invitations', component: InvitationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'saved-events', component: SavedEventsComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
