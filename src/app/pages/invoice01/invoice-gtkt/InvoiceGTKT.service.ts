import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceGTKTService extends ServiceBaseService{

  getListInvoiceGTKT(keyword: any = null){
    //return this.get(`api/app/branch${keyword?('?Keyword='+keyword):''}`);
  }

  // ${keyword?('?Keyword='+keyword):''} nếu tồn tại keyword thì thêm đoạn url sau nếu không thì rỗng;
  
  updateInvoiceGTKT(params: any){
    //return this.put(`api/app/branch/${params.id}`, params);
  }

  getInfoInvoiceGTKTByID(id: any){
    //return this.get(`api/app/branch/${id}`);
  }

  deleteInvoiceGTKT(id: any){
    //return this.delete(`api/app/branch/${id}`);
  }

  createInvoiceGTKT(params: any){
    //return this.post(`api/app/branch`, params);
  }
}
