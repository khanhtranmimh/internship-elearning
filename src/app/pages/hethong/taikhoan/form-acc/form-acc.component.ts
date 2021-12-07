import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PermissionService } from '../../quyen/permission.service';
import { AccountService } from '../Account.service';
import { IData } from '../data.model';


@Component({
  selector: 'app-form-acc',
  templateUrl: './form-acc.component.html',
  styleUrls: ['./form-acc.component.css']
})
export class FormAccComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  @Input() item: IData = {};
  @Input() flag: boolean = false;
  @Output() backEvent = new EventEmitter();

  dataPer:any;
  test: any;
  data:IData = {};

  backList: boolean = false;

  submitForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public permissionService: PermissionService,
    public accountService: AccountService
  ) {
    this.submitForm = this.fb.group({
      hoten: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      sdt: [null, [Validators.required, Validators.minLength(10)]],
      taikhoan: [null, [Validators.required]],
      matkhau: [null, Validators.required],
      quyen: [null, Validators.required],
    })
  }

  ngOnInit(): void {

    if (this.flag) {
      this.submitForm.get('taikhoan')?.disable();
    }

    this.permissionService.getListPermission().subscribe((data) => {
      this.dataPer = data.items;
    })

    this.accountService.getListAccount().subscribe((data) => {
      this.test = data.items;
      console.log("test", this.test);
    })
  }

  onSubmit() {
    //console.log("data", this.submitForm.controls.quyen.value);
    console.log("data", this.submitForm.value);
    const params = {
      name: this.submitForm.get('hoten')?.value,
      email: this.submitForm.get('email')?.value,
      phone: this.submitForm.get('sdt')?.value,
      acc: this.submitForm.get('taikhoan')?.value,
      pass: this.submitForm.get('matkhau')?.value,
      permissionId: this.submitForm.get('quyen')?.value
    }
    this.accountService.createAccount(params).subscribe((data) => {
      //this._location.back();
      console.log("thành công thêm:", this.submitForm.value);
    })

    // const valid = this.submitForm.valid;
    // if (valid) {
    //   this.newItemEvent.emit(this.submitForm.value);
    //   //console.log(this.submitForm.value);
    // } else {
    //   for (const i in this.submitForm.controls) {
    //     if (this.submitForm.controls.hasOwnProperty(i)) {
    //       this.submitForm.controls[i].markAsDirty();
    //       this.submitForm.controls[i].updateValueAndValidity();
    //     }
    //   }
    // }
  }

  back() {
    this.backEvent.emit(this.backList);
  }
}
