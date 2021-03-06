import {NgModule, provide} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {WindowService} from "./services/window.service";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import * as localforage from "localforage";
import {EventService} from "./services/event.service";
import {SpeakerService} from "./services/speaker.service";
import {SpeakersEventsService} from "./services/speakers_events.service";
import {LevelService} from "./services/level.service";
import {TrackService} from "./services/track.service";
import {SessionsListComponent} from "./components/sessions/sessions-list.component";
import {SessionDetailComponent} from "./components/sessions/session-detail.component";
import {BofsListComponent} from "./components/bofs/bofs-list.component";
import {BofDetailComponent} from "./components/bofs/bofs-detail.component";
import {SocialeventsListComponent} from "./components/social_events/socialevents-list.component";
import {SocialeventDetailComponent} from "./components/social_events/socialevents-detail.component";
import {SchedulerListComponent} from "./components/scheduler/scheduler-list.component";
import {SchedulerDetailComponent} from "./components/scheduler/scheduler-detail.component";
import {SpeakersListComponent} from "./components/speakers/speakers-list.component";
import {SpeakerDetailsComponent} from "./components/speakers/speaker-detail.component";
import {PagesComponent} from "./components/pages/pages.component";
import {PagesListComponent} from "./components/pages/pages-list.component";
import {PagesDetailComponent} from "./components/pages/page-detail.component";
import {SocialmediaComponent} from "./components/social_media/socialmedia.component";
import {FloorsComponent} from "./components/floors/floors.component";
import {LocationsComponent} from "./components/locations/locations.component";
import {ListDetailsComponent} from "./components/events_partials/list-details.component";
import {FavoritesComponent} from "./components/events_partials/favorites.component";
import {FilterComponent} from "./components/events_partials/filter.component";

import {ENV} from "./config/env";
import {CONFIG} from "./config/config";


@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		ListDetailsComponent,
		FilterComponent,
		SessionsListComponent,
		SessionDetailComponent,
		BofsListComponent,
		BofDetailComponent,
		SocialeventsListComponent,
		SocialeventDetailComponent,
		SchedulerListComponent,
		SchedulerDetailComponent,
		SpeakersListComponent,
		SpeakerDetailsComponent,
		PagesComponent,
		PagesListComponent,
		PagesDetailComponent,
		SocialmediaComponent,
		FloorsComponent,
		LocationsComponent,
		FavoritesComponent
	],
	providers: [
		ApiService,
		WindowService,
		EventService,
		SpeakerService,
		SpeakersEventsService,
		LevelService,
		TrackService,
		APP_ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		provide('localforage', {useValue: localforage}),
		provide('config', {useValue: CONFIG[ENV]})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
