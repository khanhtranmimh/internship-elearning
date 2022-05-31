import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hethong',
  templateUrl: './hethong.component.html',
  styleUrls: ['./hethong.component.css']
})
export class HethongComponent implements OnInit {
  isCollapsed = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // test(){
  //   this.router.navigate(['hethong/chinhanh']);
  // }

}
