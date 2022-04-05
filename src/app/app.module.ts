import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApitesteComponent } from './apiteste/apiteste.component';
import { EditService,ToolbarService } from '@syncfusion/ej2-angular-grids';



@NgModule({
  declarations: [
    AppComponent,
    ApitesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ApitesteComponent],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
