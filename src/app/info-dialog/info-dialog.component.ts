import {Component , Inject} from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { ViewChild } from '@angular/core'; 
@Component({
  selector: 'cdk-dialog-styling-example-dialog',
  templateUrl: './info-dialog.component.html',
})
export class InfoRequestDialog 
{  
  constructor(public dialogRef: DialogRef , @Inject(DIALOG_DATA) public data: any  ) {
    
  }
  
  

} 