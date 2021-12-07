import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from 'src/app/pages/hethong/chinhanh/branch.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  isShowCreateOrUpdate: boolean= false; //false: tạo, true: sửa
  ids = this.route.snapshot.paramMap.get('id');
  flag = true;

  selectedValue = null;
  Citys = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng'];

  submitForm: FormGroup;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    //public branchService: BranchService,
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      customerId: [null, [Validators.required]],
      taxCode: [null, Validators.required],
      fullName: [null, [Validators.required, Validators.minLength(6)]],
      address: [null, Validators.required],
      legalName:  [null],
      bankAcount:[],
      bankName: [],
      phone: [],
      soFax:[],
      email:[],
      district:[],
      city:[]
    })
  }

  ngOnInit(): void {
    // if (String(this.ids) !== '0') {
    //   this.isShowCreateOrUpdate = true;
    //   this.loadData(this.ids);
    //   this.flag = false;
    // }
  }

  public loadData(id: any) {
    // this.branchService.getInfoBranchByID(id).subscribe((data) => {
    //   this.submitForm.patchValue({
    //     tenmien: data.url,
    //     MST: data.mst,
    //     tenchinhanh: data.nameBranch,
    //     diachi: data.address,
    //   })
    // });
  }

  onSubmit(){
    // const valid = this.submitForm.valid;
    // if(valid){
    //   if (this.isShowCreateOrUpdate) { // Update
    //     const params = {
    //       id: this.ids,
    //       mst: this.submitForm.get('MST')?.value,
    //       url: this.submitForm.get('tenmien')?.value,
    //       nameBranch: this.submitForm.get('tenchinhanh')?.value,
    //       address: this.submitForm.get('diachi')?.value,
    //       status: "false",
    //     }
    //     this.branchService.updateBranch(params).subscribe((data) => {
    //       this._location.back();
    //     })
    //   } else { // CREATE
    //     const params = {
    //       mst: this.submitForm.get('MST')?.value,
    //       url: this.submitForm.get('tenmien')?.value,
    //       nameBranch: this.submitForm.get('tenchinhanh')?.value,
    //       address: this.submitForm.get('diachi')?.value,
    //       status: "false",
    //     }
    //     this.branchService.createBranch(params).subscribe((data) => {
    //       this._location.back();
    //     })
    //   }
    // }else{
    //   for (const i in this.submitForm.controls) {
    //     if (this.submitForm.controls.hasOwnProperty(i)) {
    //       this.submitForm.controls[i].markAsDirty();
    //       this.submitForm.controls[i].updateValueAndValidity();
    //     }
    //   }
    // }
  }

  back(){
    this._location.back();
  }

}
