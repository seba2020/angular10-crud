import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewComponent } from './components/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
