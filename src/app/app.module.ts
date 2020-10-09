import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        AppComponent,
        NewsfeedComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        FlexModule,
        MatProgressBarModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
