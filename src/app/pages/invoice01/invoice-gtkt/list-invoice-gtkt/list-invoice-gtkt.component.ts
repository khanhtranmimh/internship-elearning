import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceGTKTService } from '../InvoiceGTKT.service';

@Component({
  selector: 'app-list-invoice-gtkt',
  templateUrl: './list-invoice-gtkt.component.html',
  styleUrls: ['./list-invoice-gtkt.component.css']
})
export class ListInvoiceGTKTComponent implements OnInit {

  //data: any;
  checked = false;
  data = [{acc:"test", tt:"Đã ký", hd:"0001", bb:"abc", tongtienhang: 100000, tongtienthue:10000, tongtt:1110111}
];
  pageIndex: number = 1;
  pageSize: number = 5;
  total:number = 0;

  // pageIndexChange:number = 1;
    
  constructor(public invoiceGTKTService: InvoiceGTKTService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    // this.branchService.getListBranch().subscribe((data) => {
    //   this.data = data.items;
    //   //this.data = data;
    //   this.total = this.data.length;
    // })
  }

  addInvoice(){
    this.router.navigate(['invoice/invoiceGTKT/form-invoice', 0]);
  }

  removeInvoice(index:any){
    // this.branchService.deleteBranch(index).subscribe((data) => {
    //   this.loadData();
    // });
  }

  editInvoice(index:any){
    // this.router.navigate(['hethong/chinhanh/branch-form', index]);
  }
  
  onKey(keyword:any){
    // this.branchService.getListBranch(keyword.target.value).subscribe((data) =>{
    //   this.data = data.items;
    //   this.total = this.data.length;
    // })
  }
}
