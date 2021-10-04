import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../data.module';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {
  subIndex:number = -1;
  flag: boolean = false;
  flagTT:number = 1;
  itemBranch: IData ={MST: '', tenmien: '', tenchinhanh: '', diachi: '', trangthai: '' }
  data: IData[] = [
    { MST: '1', tenmien: 'abc', tenchinhanh: 'Chi Nhánh 1', diachi: 'Hà Nội', trangthai: 'false' },
    { MST: '2', tenmien: 'xyz', tenchinhanh: 'Chi Nhánh 2', diachi: 'Hà Nội', trangthai: 'false' },
    { MST: '3', tenmien: 'mien', tenchinhanh: 'Chi Nhánh 3', diachi: 'Hà Nội', trangthai: 'false' }];
  
  dataBetween:IData[]= this.data;
  // dataBetween để làm data trung gian cho lúc tìm kiếm nên mỗi lần thêm sửa xóa phải gán lại data = dataBetween.
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {
    if(this.subIndex === -1){
      this.data.push(newItem);
      this.data = [...this.data];
    }
    else{
      this.data.splice(this.subIndex,1,newItem);
    }
    this.refresh();
    this.flag = false;
    this.flagTT = 1;
    this.dataBetween=this.data;
  }
  refresh(){
    this.subIndex = -1;
    this.itemBranch = {MST: '', tenmien: '', tenchinhanh: '', diachi: '', trangthai: '' }
  }

  backList(subFlag:boolean){
    this.flag= subFlag;
    this.flagTT = 1;
    this.refresh();
  }

  formBranch(){
    this.flag = true;
    this.flagTT = 2;
  }

  removeBranch(index:number){
    this.data.splice(index,1);
    this.data = [...this.data];
    this.dataBetween=this.data;
  }

  editBranch(index:number){
    this.subIndex = index;
    this.itemBranch = {...this.data[index]};
    this.flag = true;
    this.flagTT = 3;
  }
  
  dataSearch: IData[] = [];
  subSearch:string ="";
  onKey(keyword:any){
    this.data = this.dataBetween;
    this.dataSearch=[];
    this.subSearch = keyword.target.value;
    for(const i in this.data){
      if(this.data[i].tenchinhanh?.indexOf(this.subSearch) !== -1){
        this.dataSearch.push(this.data[i]);
      }
    }
    this.data=this.dataSearch;
  }
}
