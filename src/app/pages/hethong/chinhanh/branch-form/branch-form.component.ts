import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { BranchService } from '../branch.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  // @Output() newItemEvent = new EventEmitter();
  // @Input() item: IData = { MST: '', tenmien: '', tenchinhanh: '', diachi: '', trangthai: 'false' };
  // @Output() backEvent = new EventEmitter();

  // backList:boolean = false;
  isShowCreateOrUpdate: boolean= false; //false: tạo, true: sửa
  ids = this.route.snapshot.paramMap.get('id');

  //ids = this.route.snapshot.paramMap.get('_id');

  flag = true;

  submitForm: FormGroup;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    public branchService: BranchService,
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      MST: [null, [Validators.required]],
      tenmien: [null, Validators.required],
      tenchinhanh: [null, [Validators.required, Validators.minLength(6)]],
      diachi: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    //console.log(ids);
    //this.isShowCreateOrUpdate = false;
    if (String(this.ids) !== '0') {
      this.isShowCreateOrUpdate = true;
      this.loadData(this.ids);
      this.flag = false;
    }
  }

  public loadData(id: any) {
    this.branchService.getInfoBranchByID(id).subscribe((data) => {
      // for (const controlName in this.SVForm.controls) {
      //   if (controlName) {
      //     this.SVForm.controls[controlName].setValue(data[controlName]);
      //   }
      // }

      this.submitForm.patchValue({
        tenmien: data.url,
        MST: data.mst,
        tenchinhanh: data.nameBranch,
        diachi: data.address,
      })
      //console.log("data", data);
    });
  }

  onSubmit(){
    const valid = this.submitForm.valid;
    if(valid){
      if (this.isShowCreateOrUpdate) { // Update
        const params = {
          id: this.ids,
          mst: this.submitForm.get('MST')?.value,
          url: this.submitForm.get('tenmien')?.value,
          nameBranch: this.submitForm.get('tenchinhanh')?.value,
          address: this.submitForm.get('diachi')?.value,
          status: "false",
        }
        this.branchService.updateBranch(params).subscribe((data) => {
          this._location.back();
        })
      } else { // CREATE
        const params = {
          mst: this.submitForm.get('MST')?.value,
          url: this.submitForm.get('tenmien')?.value,
          nameBranch: this.submitForm.get('tenchinhanh')?.value,
          address: this.submitForm.get('diachi')?.value,
          status: "false",

          // id: this.submitForm.get('MST')?.value,
          // toanha: this.submitForm.get('tenmien')?.value,
          // tang: this.submitForm.get('tenchinhanh')?.value,
          // sogiuong: this.submitForm.get('diachi')?.value,

        }
        this.branchService.createBranch(params).subscribe((data) => {
          this._location.back();
        })
      }
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
    this._location.back();
  }
}
