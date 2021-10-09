import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IData } from '../data.model';


@Component({
  selector: 'app-form-acc',
  templateUrl: './form-acc.component.html',
  styleUrls: ['./form-acc.component.css']
})
export class FormAccComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  @Input() item: IData = {};
  @Input() flag:boolean = false;
  @Output() backEvent = new EventEmitter();

  backList:boolean = false;

  submitForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      hoten: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      sdt: [null, [Validators.required, Validators.minLength(10)]],
      taikhoan: [null, Validators.required],
      matkhau: [null, Validators.required],
      quyen:[null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const valid = this.submitForm.valid;
    if(valid){
      this.newItemEvent.emit(this.submitForm.value);
      //console.log(this.submitForm.value);
    }else{
      for (const i in this.submitForm.controls) {
        if (this.submitForm.controls.hasOwnProperty(i)) {
          this.submitForm.controls[i].markAsDirty();
          this.submitForm.controls[i].updateValueAndValidity();
        }
      }
    }
  }

  back(){
    this.backEvent.emit(this.backList);
  } 
}
