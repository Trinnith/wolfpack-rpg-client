import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './components/game/game.component';
import { ConsoleWidgetComponent } from './widgets/console/console.widget';
import { CharacterWidgetComponent } from './widgets/character/character.widget';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { WidgetFactoryComponent } from './components/widget-factory/widget-factory.component';

import { ShowLastDirective } from './directives/show-last.directive';
import { WidgetContainerDirective } from './directives/widget-container.directive';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatSidenavModule, MatSlideToggleModule, MatToolbarModule, MatRadioModule
} from '@angular/material';
import { FishingWidgetComponent } from './widgets/fishing/fishing.widget';


@NgModule({
  declarations: [
    ShowLastDirective, WidgetContainerDirective,

    AppComponent, AuthComponent, GameComponent,

    CharacterWidgetComponent,
    ConsoleWidgetComponent,
    FishingWidgetComponent,

    WidgetContainerComponent,
    WidgetFactoryComponent,
  ],
  imports: [
    AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,

    FlexLayoutModule, LayoutModule, ScrollingModule,

    MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSlideToggleModule, MatToolbarModule
  ],
  entryComponents: [CharacterWidgetComponent, ConsoleWidgetComponent, FishingWidgetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }