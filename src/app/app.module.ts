import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkDialogContainer } from '@angular/cdk/dialog'
import { CdkTableModule } from '@angular/cdk/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { StatusPipe } from './status.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    OverlayModule,
    PortalModule
  ],
  providers: [CdkDialogContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
