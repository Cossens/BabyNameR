import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, 
  MdCheckboxModule, 
  MdCardModule, 
  MdSidenavModule, 
  MdToolbarModule, 
  MdIconModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BabyNamesComponent } from './baby-names/baby-names.component';

import { ApolloModule } from 'apollo-angular';
import { provideClient } from './client';

@NgModule({
  declarations: [
    AppComponent,
    BabyNamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
