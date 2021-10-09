import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from '../../quyen/data.model';

@Component({
  selector: 'app-form-permission',
  templateUrl: './form-permission.component.html',
  styleUrls: ['./form-permission.component.css']
})
export class FormPermissionComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  @Output() backEvent = new EventEmitter();

  @Input() dataPermission:IData={
    tenquyen: '', quyenqltaikhoan: false, quyenqlquyen: false, quyenqlchinhanh: false, quyenqlkhachhang: false
  }
  backList:boolean = false;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  save(){
      this.newItemEvent.emit(this.dataPermission);
  }

  back(){
    this.backEvent.emit(this.backList);
  }
}
