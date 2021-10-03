import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IData } from '../data.module';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  @Input() item: any;

  submitForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      MST: [this.item, [Validators.required]],
      tenmien: [null, Validators.required],
      tenchinhanh: [null, [Validators.required, Validators.minLength(6)]],
      diachi: [null, Validators.required],
      trangthai: 'false'
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const valid = this.submitForm.valid;
    if(valid){
      // console.log('go :>> ');
      // console.log('this.submitForm.value :>> ', this.submitForm.value);
      this.newItemEvent.emit(this.submitForm.value);
    }else{
      for (const i in this.submitForm.controls) {
        if (this.submitForm.controls.hasOwnProperty(i)) {
          this.submitForm.controls[i].markAsDirty();
          this.submitForm.controls[i].updateValueAndValidity();
        }
      }
      console.log('Chưa nhập đủ trường :>> ');
    }
  }
}
