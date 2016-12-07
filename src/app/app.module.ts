import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchTextboxComponent } from './search-textbox/search-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTextboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
