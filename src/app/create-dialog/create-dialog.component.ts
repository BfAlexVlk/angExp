import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'; 
import { Component, OnInit ,Inject, Optional} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,  Validators, ReactiveFormsModule  } from '@angular/forms'
import { MatFormField } from '@angular/material/form-field'
import {Request} from '../models/request'
@Component({
  selector: 'create-request-dialog',
  templateUrl: './create-dialog.component.html',
})
export class CreateRequestDialog  implements OnInit{
   public form: FormGroup;
  formData:Request;
  constructor(public formBuilder: FormBuilder  ,public dialogRef: DialogRef ,  @Inject(DIALOG_DATA) data:any) {

 this.formData = {} as Request;
    this.form = formBuilder.group(
      {
        type: [this.formData.type, [Validators.required]],
        infoSystem: [this.formData.infoSystem, [Validators.required]],
        domainName: [this.formData.domainName, [Validators.required]],
        status: [this.formData.status, [Validators.required]],
        regNum: [this.formData.regNum, [Validators.required]],
         externalNetwork: [this.formData.externalNetwork, [Validators.required]],
       internalNetwork: [this.formData.internalNetwork, [Validators.required]]
    }
      );
  }
    ngOnInit(): void {
    
  } 
 public submit(){
  console.log('on submit' , this.form)
  if (this.form.valid){
    this.dialogRef.close(this.formData);
  }
 } 


} 