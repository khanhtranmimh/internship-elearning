import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {
  data: any;
  pageIndex: number = 1;
  pageSize: number = 5;
  total:number = 0;

  // pageIndexChange:number = 1;
    
  constructor(public branchService: BranchService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    this.branchService.getListBranch().subscribe((data) => {
      this.data = data.items;
      //this.data = data;
      this.total = this.data.length;
    })
  }

  addBranch(){
    this.router.navigate(['hethong/chinhanh/branch-form', 0]);
  }

  removeBranch(index:any){
    this.branchService.deleteBranch(index).subscribe((data) => {
      this.loadData();
    });
  }

  editBranch(index:any){
    this.router.navigate(['hethong/chinhanh/branch-form', index]);
  }
  
  onKey(keyword:any){
    // let params = {
    //   keyword: keyword.target.value
    // }

    this.branchService.getListBranch(keyword.target.value).subscribe((data) =>{
      this.data = data.items;
      this.total = this.data.length;
    })
   
    // this.branchService.getListBranch(keyword.target.value).subscribe((data) =>{
    //   this.data = data;
    //   this.total = this.data.length;
    // })
    //console.log(keyword);
  }
}
