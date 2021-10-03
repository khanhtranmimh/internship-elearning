import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../data.module';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {
  h: boolean = false;
  a: any;
  test = "hieu";
  data: IData[] = [
    { MST: 1, tenmien: 'abc', tenchinhanh: 'Chi Nhánh 1', diachi: 'Hà Nội', trangthai: 'false' },
    { MST: 2, tenmien: 'xyz', tenchinhanh: 'Chi Nhánh 2', diachi: 'Hà Nội', trangthai: 'false' },
    { MST: 3, tenmien: 'mien', tenchinhanh: 'Chi Nhánh 3', diachi: 'Hà Nội', trangthai: 'false' }];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {
    this.data.push(newItem);
    this.data = [...this.data];
    this.h = false;
  }
  formBranch(){
    this.h = true;
  }

  removeBranch(removeBranch:any){
    const index = this.data.findIndex(branch => branch.MST === removeBranch);
    this.data.splice(index,1);
    this.data = [...this.data];
  }

  editBranch(MST:any){
    const index = this.data.findIndex(branch => branch.MST === MST);
    this.a= this.data[index];
    this.h = true;
    // this.a = [...this.a];
    // console.log(this.a);
  }
}
