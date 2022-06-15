import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

export interface ITientrinh {
  id: number;
  tientrinh: string;
  thoigianxuly: number;
  thoidiem: number;
}

export interface IData {
  id?: number;
  tientrinh?: string;
  thoigianxuly?: string;
  thoidiem?: string;
}

@Component({
  selector: 'app-hethong',
  templateUrl: './hethong.component.html',
  styleUrls: ['./hethong.component.css']
})

export class HethongComponent implements OnInit {
  soLuongTT = 0;
  dataF : any;
  flagTableDocQuyen = false;
  isVisible = false;
  submitFormDetails: FormGroup;
  tienTrinhs: ITientrinh[] = [];
  pageIndex: number = 1;
  pageSize: number = 5;
  total: number = 0;

  indexOfInvoiceDetailUpdate: number = 0;
  flagCreateorUpdateInvoiceDetail = true; //Create

  //để không bị trùng id khi mà dùng chức năng sửa
  idOfCreateDetail = 0.5;

  constructor(
    private router: Router,
    private modal: NzModalService,
    public fb: FormBuilder,
  ) {
    this.submitFormDetails = this.fb.group({
      tientrinh: [null, [Validators.required]],
      thoigianxuly: [null, [Validators.required]],
      thoidiem: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  getObject(i: any) {
    // console.log("Dataa:", Object.entries(i));
    return Object.entries(i);
  }

  handleOk(): void {
    if (this.tienTrinhs.find(x => x.tientrinh == this.submitFormDetails.get('tientrinh')?.value)) {
      this.modal.error({
        nzTitle: 'Lỗi',
        nzContent: 'Đã tồn tại tiến trình.'
      });
    }
    else {
      if (isNaN(this.submitFormDetails.get('thoigianxuly')?.value) || isNaN(this.submitFormDetails.get('thoidiem')?.value)) {
        this.modal.error({
          nzTitle: 'Lỗi',
          nzContent: 'Sai định dạng dữ liệu. Vui lòng nhập chữ số vào ô Thời gian xử lý và Thời điểm'
        });
      }
      else {
        const validDetail = this.submitFormDetails.valid;
        if (validDetail) {
          if (this.flagCreateorUpdateInvoiceDetail == true) {
            const par = {
              id: this.idOfCreateDetail + 1,
              tientrinh: this.submitFormDetails.get('tientrinh')?.value,
              thoigianxuly: this.submitFormDetails.get('thoigianxuly')?.value,
              thoidiem: this.submitFormDetails.get('thoidiem')?.value,
            }
            this.tienTrinhs.push(par);
            this.tienTrinhs = [...this.tienTrinhs];

            this.idOfCreateDetail = par.id;
          }
          else {
            for (let i = 0; i < this.tienTrinhs.length; i++) {
              if (this.tienTrinhs[i].id == this.tienTrinhs[this.indexOfInvoiceDetailUpdate].id) {
                const par = {
                  id: this.tienTrinhs[i].id,
                  tientrinh: this.submitFormDetails.get('tientrinh')?.value,
                  thoigianxuly: this.submitFormDetails.get('thoigianxuly')?.value,
                  thoidiem: this.submitFormDetails.get('thoidiem')?.value,
                }
                this.tienTrinhs[i] = par;
                this.tienTrinhs = [...this.tienTrinhs];
                break;
              }
            }
            this.flagCreateorUpdateInvoiceDetail = true;
          }
          this.submitFormDetails.reset();
          this.isVisible = false;
        }
        else {
          for (const i in this.submitFormDetails.controls) {
            if (this.submitFormDetails.controls.hasOwnProperty(i)) {
              this.submitFormDetails.controls[i].markAsDirty();
              this.submitFormDetails.controls[i].updateValueAndValidity();
            }
          }
        }
      }
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.submitFormDetails.reset();
  }

  removeTienTrinh(id: any) {
    for (let i of this.tienTrinhs) {
      if (i.id == id) {
        this.tienTrinhs = this.tienTrinhs.filter(item => item != i);
        this.tienTrinhs = [...this.tienTrinhs];
        break;
      }
    }
  }

  editTienTrinh(id: any) {
    this.flagCreateorUpdateInvoiceDetail = false;
    for (let i = 0; i < this.tienTrinhs.length; i++) {
      if (this.tienTrinhs[i].id == id) {
        this.submitFormDetails.patchValue({
          tientrinh: this.tienTrinhs[i].tientrinh,
          thoigianxuly: this.tienTrinhs[i].thoigianxuly,
          thoidiem: this.tienTrinhs[i].thoidiem,
        })
        this.indexOfInvoiceDetailUpdate = i;
        break;
      }
    }
    this.showModal();
  }

  onSubmit() {
    // console.log("test:", this.tienTrinhs);
    let ans = [];
    this.tienTrinhs = [
      {
        "id": 1.5,
        "tientrinh": "P1",
        "thoigianxuly": 4,
        "thoidiem": 0
      },
      {
        "id": 2.5,
        "tientrinh": "P2",
        "thoigianxuly": 3,
        "thoidiem": 6
      },
      {
        "id": 3.5,
        "tientrinh": "P3",
        "thoigianxuly": 6,
        "thoidiem": 4
      },
      {
        "id": 4.5,
        "tientrinh": "P4",
        "thoigianxuly": 8,
        "thoidiem": 3
      }
    ];

    //sắp xếp tăng dần đầu vào
    //this.tienTrinhs.sort((a, b) => (a.thoidiem > b.thoidiem) ? 1 : -1)
    let a: number[] = [];
    let b: number[] = [];
    let sum: number = 0;
    let temp = null;
    let count = 0;
    let pos = -1;
    this.tienTrinhs.forEach(element => {
      a.push(element.thoidiem);
      b.push(element.thoigianxuly);
      sum += element.thoigianxuly;
    });
    let i = Math.min.apply(Math, a);

    while (count <= a.length) {
      // debugger
      let c = [];
      if (pos !== -1) {
        c[pos + 1] = 0;
        a[pos] = sum + 1;
        pos = -1;
        temp = null;
      }
      c[0] = i;
      for (let j = 0; j < b.length; j++) {
        if (a[j] <= i) {
          a[j] = i;
          c[j + 1] = b[j];
          if (temp == null || b[j] < temp) {
            temp = b[j];
            pos = j;
          }
        } else {
          if (ans.length > 0 && ans[ans.length - 1][j + 1] === 0) c[j + 1] = '';
          if (c[j + 1] !== 0) c[j + 1] = '';
        }
      }
      ans.push(c);
      i = i + (temp == null ? 0 : temp);
      count++;
    }
    //
    this.dataF = ans;
  }

  back() {
    this.tienTrinhs = [];
  }
}
