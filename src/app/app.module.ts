import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DatatableComponent} from './datatable/datatable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MaterialModule} from './/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    Ng2SmartTableModule,
    MaterialModule,
    MatCheckboxModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
