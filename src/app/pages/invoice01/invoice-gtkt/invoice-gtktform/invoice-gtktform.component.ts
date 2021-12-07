import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invoice-gtktform',
  templateUrl: './invoice-gtktform.component.html',
  styleUrls: ['./invoice-gtktform.component.css']
})
export class InvoiceGTKTFormComponent implements OnInit {

  pageIndex: number = 1;
  pageSize: number = 5;
  total:number = 0;
  data:any;

  flagInvoiceDetail = false;

  isShowCreateOrUpdate: boolean = false; //false: tạo, true: sửa
  ids = this.route.snapshot.paramMap.get('id');
  //flag = true;

  selectedValue = null;
  payTypes = ['Tiền mặt', 'Chuyển khoản'];

  submitForm: FormGroup;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    //public branchService: BranchService,
    public fb: FormBuilder,
  ) {
    this.submitForm = this.fb.group({
      taxCodeBuy: [null, Validators.required],
      companyNameBuy: [null, [Validators.required, Validators.minLength(6)]],
      addressBuy: [null, Validators.required],
      dateInvoice: [null],
      payType: [null],
      moneyType: [null],
      noteInvoice: [null],
      customerIdSell:[],
      taxCodeSell:[],
      companyNameSell:[],
      addressSell:[],
      nameSell: [],
      emailSell:[],
      nameBankSell:[],
      accountBankSell:[],
      flagInvoiceDetail:[]
    })
  }

  ngOnInit(): void {
  }

  public loadData(id: any) {
  }

  onSubmit() {
    console.log(this.flagInvoiceDetail);
  }

  onKey(keyword:any){

  }

  back() {
    this._location.back();
  }

}
