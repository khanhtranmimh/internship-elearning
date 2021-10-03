import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quyen',
  templateUrl: './quyen.component.html',
  styleUrls: ['./quyen.component.css']
})
export class QuyenComponent implements OnInit {
  @Input() item: any = 'test1';
  // @Output() outputEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // this.save();
  }

  // save() {
  //   this.outputEvent.emit('hieu');
  // }



}
