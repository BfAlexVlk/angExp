import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkDialogContainer } from '@angular/cdk/dialog'
import { CdkTableModule } from '@angular/cdk/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';

import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { StatusPipe   } from './status.pipe';  
import { CreateRequestDialog } from './create-dialog/create-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CreateRequestDialog,
    StatusPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    OverlayModule,
    PortalModule,
     HttpClientModule,MatSelectModule
  ],
  providers: [CdkDialogContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
