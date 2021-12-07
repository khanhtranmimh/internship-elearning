import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.css']
})
export class ListPermissionComponent implements OnInit {

  // subIndex:number = -1;
  // flag: boolean = false;
  // flagTT:number = 1;
  // itemBranch: IData ={}
  // data: IData[] = [
  //   { tenquyen: 'abc', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: false },
  //   { tenquyen: 'ayz', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: true },
  //   { tenquyen: '123', quyenqltaikhoan: true, quyenqlquyen: true, quyenqlchinhanh: true, quyenqlkhachhang: false }];
  
  // dataBetween:IData[]= this.data;
  // dataBetween để làm data trung gian cho lúc tìm kiếm nên mỗi lần thêm sửa xóa phải gán lại data = dataBetween.
  data: any;
  pageIndex: number = 1;
  pageSize: number = 5;
  total:number = 0;
  constructor(public permissionService: PermissionService,
              private router: Router,
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.permissionService.getListPermission().subscribe((data) => {
      this.data = data;
      this.total = this.data.length;
      //console.log(data);
    })
  }

  addPermission() {
    this.router.navigate(['hethong/quyen/form-permission', 0]);
  }

  removePermission(index:any){
    this.permissionService.deletePermission(index).subscribe((data) => {
      this.loadData();
    });
  }

  editPermission(index:any){
    this.router.navigate(['hethong/quyen/form-permission', index]);
  }

  onKey(keyword:any){
    this.permissionService.getListPermission(keyword.target.value).subscribe((data) =>{
      //Gán lại data để hiển thị tìm kiếm.
      this.data = data.items;
      this.total = this.data.length;
    })
  }

}
