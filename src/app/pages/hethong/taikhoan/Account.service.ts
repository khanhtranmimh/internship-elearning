import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ServiceBaseService{

  getListAccount(keyword: any = null){
    return this.get(`api/app/my-account${keyword?('?Keyword='+keyword):''}`);
  }
  // ${keyword?('?Keyword='+keyword):''} nếu tồn tại keyword thì thêm đoạn url sau nếu không thì rỗng;
  updateAccount(params: any){
    return this.put(`api/app/my-account/${params.id}`, params);
  }

  getInfoAccountByID(id: any){
    return this.get(`api/app/my-account/${id}`);
  }

  deleteAccount(id: any){
    return this.delete(`api/app/my-account/${id}`);
  }

  createAccount(params: any){
    return this.post(`api/app/my-account`, params);
  }
}
