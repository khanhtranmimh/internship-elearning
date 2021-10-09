import { Component, OnInit } from '@angular/core';
import { IData } from '../../quyen/data.model';

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.css']
})
export class ListPermissionComponent implements OnInit {

  subIndex:number = -1;
  flag: boolean = false;
  flagTT:number = 1;
  itemBranch: IData ={}
  data: IData[] = [
    { tenquyen: 'abc', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: false },
    { tenquyen: 'ayz', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: true },
    { tenquyen: '123', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: false }];
  
  dataBetween:IData[]= this.data;
  // dataBetween để làm data trung gian cho lúc tìm kiếm nên mỗi lần thêm sửa xóa phải gán lại data = dataBetween.
  
  pageIndex: number = 1;
  pageSize: number = 2;
  total:number = this.data.length;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any) {
    if(this.subIndex === -1){
      this.data.unshift(newItem);
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
    this.itemBranch = {}
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
      if(this.data[i].tenquyen?.indexOf(this.subSearch) !== -1){
        this.dataSearch.push(this.data[i]);
      }
    }
    this.data=this.dataSearch;
  }

}
