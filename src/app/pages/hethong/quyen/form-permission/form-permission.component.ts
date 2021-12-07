import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PermissionService } from '../permission.service';
import { Location } from '@angular/common';
import { IData } from '../data.model';

@Component({
  selector: 'app-form-permission',
  templateUrl: './form-permission.component.html',
  styleUrls: ['./form-permission.component.css']
})
export class FormPermissionComponent implements OnInit {

  // @Output() newItemEvent = new EventEmitter();
  // @Output() backEvent = new EventEmitter();

  // @Input() dataPermission:IData={
  //   tenquyen: '', quyenqltaikhoan: false, quyenqlquyen: false, quyenqlchinhanh: false, quyenqlkhachhang: false
  // }
  // backList:boolean = false;
  isShowCreateOrUpdate: boolean = false; //false: tạo, true: sửa
  ids = this.route.snapshot.paramMap.get('id');
  flag = true;
  dataPermission: IData = {};

  constructor(private route: ActivatedRoute,
    public permissionService: PermissionService,
    private _location: Location,
  ) {
  }

  ngOnInit(): void {
    if (String(this.ids) !== '0') {
      this.isShowCreateOrUpdate = true;
      this.loadData(this.ids);
      this.flag = false;
    }
  }

  public loadData(id: any) {
    this.permissionService.getInfoPermissionByID(id).subscribe((data) => {
      this.dataPermission.Name = data.name;
      this.dataPermission.quyenqltaikhoan = data.userPermission;
      this.dataPermission.quyenqlquyen = data.perPermission;
      this.dataPermission.quyenqlchinhanh = data.branchPermission;
      this.dataPermission.quyenqlkhachhang = data.customerPermission;
      this.dataPermission.quyenqlInvoice = data.invoicePermision;
    });
  }

  Save() {
    if (this.isShowCreateOrUpdate) { // Update
      const params = {
        id: this.ids,
        name: this.dataPermission.Name,
        userPermission: this.dataPermission.quyenqltaikhoan,
        perPermission: this.dataPermission.quyenqlquyen,
        branchPermission: this.dataPermission.quyenqlchinhanh,
        customerPermission: this.dataPermission.quyenqlkhachhang,
        invoicePermision: this.dataPermission.quyenqlInvoice,
      }
      this.permissionService.updatePermission(params).subscribe((data) => {
        this._location.back();
      })
    } else { // CREATE
      const params = {
        name: this.dataPermission.Name,
        userPermission: this.dataPermission.quyenqltaikhoan,
        perPermission: this.dataPermission.quyenqlquyen,
        branchPermission: this.dataPermission.quyenqlchinhanh,
        customerPermission: this.dataPermission.quyenqlkhachhang,
        invoicePermision: this.dataPermission.quyenqlInvoice,
      }
      this.permissionService.createPermission(params).subscribe((data) => {
        this._location.back();
      })
    }
  }

  back() {
    this._location.back();
  }
}
