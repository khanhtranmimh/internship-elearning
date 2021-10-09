import { Component, OnInit } from '@angular/core';
import { IData } from '../data.model';

@Component({
  selector: 'app-list-acc',
  templateUrl: './list-acc.component.html',
  styleUrls: ['./list-acc.component.css']
})
export class ListAccComponent implements OnInit {
  data: IData[] = [
    {hoten: '123', email: 'abc@gmail.com', sdt: '0912345678', taikhoan: 'adv', matkhau: 'a', quyen:'d'}
  ];

  subIndex:number = -1;
  flag: boolean = false;
  flagTT:number = 1;
  editFlag: boolean = false;
  itemAcc: IData = {};
  
  dataBetween:IData[]= this.data;
  // dataBetween để làm data trung gian cho lúc tìm kiếm nên mỗi lần thêm sửa xóa phải gán lại data = dataBetween.
  
  pageIndex: number = 1;
  pageSize: number = 2;
  total:number = this.data.length;
  // pageIndexChange:number = 1;
    
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
    this.itemAcc = {}
  }

  backList(subFlag:boolean){
    this.flag= subFlag;
    this.flagTT = 1;
    this.refresh();
  }

  formAcc(){
    this.flag = true;
    this.flagTT = 2;
    this.editFlag=false;
  }

  removeAcc(index:number){
    this.data.splice(index,1);
    this.data = [...this.data];
    this.dataBetween=this.data;
  }

  editAcc(index:number){
    this.subIndex = index;
    this.itemAcc = {...this.data[index]};
    this.flag = true;
    this.flagTT = 3;
    this.editFlag = true;
  }
  
  dataSearch: IData[] = [];
  subSearch:string ="";
  onKey(keyword:any){
    this.data = this.dataBetween;
    this.dataSearch=[];
    this.subSearch = keyword.target.value;
    for(const i in this.data){
      if(this.data[i].hoten?.indexOf(this.subSearch) !== -1){
        this.dataSearch.push(this.data[i]);
      }
    }
    this.data=this.dataSearch;
  }

}
