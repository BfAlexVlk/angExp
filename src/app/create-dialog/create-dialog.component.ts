import {Component , Inject} from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'create-request-dialog',
  templateUrl: './create-dialog.component.html',
})
export class CreateRequestDialog 
{  
  constructor(public dialogRef: DialogRef , @Inject(DIALOG_DATA) public data: any  ) {
    
  }
  
  

} 