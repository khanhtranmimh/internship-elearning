import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends ServiceBaseService{

  getListBranch(keyword: any = null){
    return this.get(`api/app/branch${keyword?('?Keyword='+keyword):''}`);
  }
  // ${keyword?('?Keyword='+keyword):''} nếu tồn tại keyword thì thêm đoạn url sau nếu không thì rỗng;
  updateBranch(params: any){
    return this.put(`api/app/branch/${params.id}`, params);
  }

  getInfoBranchByID(id: any){
    return this.get(`api/app/branch/${id}`);
  }

  deleteBranch(id: any){
    return this.delete(`api/app/branch/${id}`);
  }

  createBranch(params: any){
    return this.post(`api/app/branch`, params);
  }
}
