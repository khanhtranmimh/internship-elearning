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
  @Input() item: IData = { MST: '', tenmien: '', tenchinhanh: '', diachi: '', trangthai: 'false' };
  @Output() backEvent = new EventEmitter();

  backList:boolean = false;

  submitForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      MST: [null, [Validators.required]],
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
      this.newItemEvent.emit(this.submitForm.value);
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
