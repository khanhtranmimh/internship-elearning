import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

export interface ITientrinh {
  id: number;
  tientrinh: string;
  thoigianxuly: string;
  thoidiem: string;
}

export interface IData {
  id?: number;
  tientrinh?: string;
  thoigianxuly?: string;
  thoidiem?: string;
}

@Component({
  selector: 'app-hethong',
  templateUrl: './hethong.component.html',
  styleUrls: ['./hethong.component.css']
})

export class HethongComponent implements OnInit {
  soLuongTT = 0;
  dataF = [
    {
      "thoidiem" : 0,
      "P1" : 4,
      "P2" : 0,
      "P3" : 0,
      "P4" : 0
    },
    {
      "thoidiem" : 4,
      "P1" : 0,
      "P2" : 8,
      "P3" : 6,
      "P4" : 0
    }
  ];
  flagTableDocQuyen = false;
  isVisible = false;
  submitFormDetails: FormGroup;
  tienTrinhs: ITientrinh[] = [];
  pageIndex: number = 1;
  pageSize: number = 5;
  total: number = 0;

  indexOfInvoiceDetailUpdate: number = 0;
  flagCreateorUpdateInvoiceDetail = true; //Create

  //để không bị trùng id khi mà dùng chức năng sửa
  idOfCreateDetail = 0.5;

  constructor(
    private router: Router,
    private modal: NzModalService,
    public fb: FormBuilder,
  ) {
    this.submitFormDetails = this.fb.group({
      tientrinh: [null, [Validators.required]],
      thoigianxuly: [null, [Validators.required]],
      thoidiem: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.tienTrinhs.find(x => x.tientrinh == this.submitFormDetails.get('tientrinh')?.value)) {
      this.modal.error({
        nzTitle: 'Lỗi',
        nzContent: 'Đã tồn tại tiến trình.'
      });
    }
    else {
      if (isNaN(this.submitFormDetails.get('thoigianxuly')?.value) || isNaN(this.submitFormDetails.get('thoidiem')?.value)) {
        this.modal.error({
          nzTitle: 'Lỗi',
          nzContent: 'Sai định dạng dữ liệu. Vui lòng nhập chữ số vào ô Thời gian xử lý và Thời điểm'
        });
      }
      else {
        const validDetail = this.submitFormDetails.valid;
        if (validDetail) {
          if (this.flagCreateorUpdateInvoiceDetail == true) {
            const par = {
              id: this.idOfCreateDetail + 1,
              tientrinh: this.submitFormDetails.get('tientrinh')?.value,
              thoigianxuly: this.submitFormDetails.get('thoigianxuly')?.value,
              thoidiem: this.submitFormDetails.get('thoidiem')?.value,
            }
            this.tienTrinhs.push(par);
            this.tienTrinhs = [...this.tienTrinhs];

            this.idOfCreateDetail = par.id;
          }
          else {
            for (let i = 0; i < this.tienTrinhs.length; i++) {
              if (this.tienTrinhs[i].id == this.tienTrinhs[this.indexOfInvoiceDetailUpdate].id) {
                const par = {
                  id: this.tienTrinhs[i].id,
                  tientrinh: this.submitFormDetails.get('tientrinh')?.value,
                  thoigianxuly: this.submitFormDetails.get('thoigianxuly')?.value,
                  thoidiem: this.submitFormDetails.get('thoidiem')?.value,
                }
                this.tienTrinhs[i] = par;
                this.tienTrinhs = [...this.tienTrinhs];
                break;
              }
            }
            this.flagCreateorUpdateInvoiceDetail = true;
          }
          this.submitFormDetails.reset();
          this.isVisible = false;
        }
        else {
          for (const i in this.submitFormDetails.controls) {
            if (this.submitFormDetails.controls.hasOwnProperty(i)) {
              this.submitFormDetails.controls[i].markAsDirty();
              this.submitFormDetails.controls[i].updateValueAndValidity();
            }
          }
        }
      }
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.submitFormDetails.reset();
  }

  removeTienTrinh(id: any) {
    for (let i of this.tienTrinhs) {
      if (i.id == id) {
        this.tienTrinhs = this.tienTrinhs.filter(item => item != i);
        this.tienTrinhs = [...this.tienTrinhs];
        break;
      }
    }
  }

  editTienTrinh(id: any) {
    this.flagCreateorUpdateInvoiceDetail = false;
    for (let i = 0; i < this.tienTrinhs.length; i++) {
      if (this.tienTrinhs[i].id == id) {
        this.submitFormDetails.patchValue({
          tientrinh: this.tienTrinhs[i].tientrinh,
          thoigianxuly: this.tienTrinhs[i].thoigianxuly,
          thoidiem: this.tienTrinhs[i].thoidiem,
        })
        this.indexOfInvoiceDetailUpdate = i;
        break;
      }
    }
    this.showModal();
  }

  onSubmit() {
    // console.log("test:", this.tienTrinhs);
    this.tienTrinhs = [
      {
        "id": 1.5,
        "tientrinh": "P1",
        "thoigianxuly": "4",
        "thoidiem": "0"
      },
      {
        "id": 2.5,
        "tientrinh": "P2",
        "thoigianxuly": "8",
        "thoidiem": "3"
      },
      {
        "id": 3.5,
        "tientrinh": "P3",
        "thoigianxuly": "6",
        "thoidiem": "4"
      },
      {
        "id": 4.5,
        "tientrinh": "P4",
        "thoigianxuly": "3",
        "thoidiem": "6"
      }
    ]
    this.soLuongTT = this.tienTrinhs.length;
    let numbers: number[] = [];
    this.tienTrinhs.forEach(element => {
      numbers.push(Number(element.thoidiem));
    });
    // console.log(numbers);
    // console.log(this.soLuongTT);
    let minInNumbers = Math.min.apply(Math, numbers);
    //console.log("nhỏ nhất:", minInNumbers);
    let data: IData[]=[];
    for(let i = 0; i < this.tienTrinhs.length; i++){
      if(Number(this.tienTrinhs[i].thoidiem) <= minInNumbers){
        data.push(this.tienTrinhs[i]);
      }
      else{
        const par = {
          id : 0,
        }
        data.push(par);
      }
    }
    console.log("data:", data);
    data.forEach(element => {
      if(element.id != 0){
        
      }
    });
    //
    this.flagTableDocQuyen = true;
  }

  back() {
    this.tienTrinhs = [];
  }

  // process_SJF_preemptive(ListP &pr, int n, int timeOUT) {
  //   ListP RL = new process[n];
  //   ListP pr1 = pr; //list temp of pr
  //   int j = 0, m = 0;
  //   int temptime = 0;
  //   for (int t = 0; t <= timeOUT; t++) {
  //     if (m > 0 && j < m) {
  //       if (temptime < RL[j].timeCPU)
  //         temptime++;
  //       if (temptime == RL[j].timeCPU) {
  //         RL[j].timeIN = t - RL[j].timeCPU;
  //         RL[j].timeOUT = RL[j].timeIN + RL[j].timeCPU;
  //         RL[j].timewait = RL[j].timeOUT - (RL[j].timeRL + RL[j].timeCPU);
  //         RL[j].timesave = RL[j].timeOUT - RL[j].timeRL;
  //         temptime = 0;
  //         j++;
  //       }
  //     }
  //     for (int i = 0; i < n; i++)
  //     if (t == pr1[i].timeRL) {
  //         int k = m;
  //       while (k > j + 1 && pr1[i].timeCPU < RL[k - 1].timeCPU) {
  //         RL[k] = RL[k - 1];
  //         k--;
  //       }
  //       RL[k] = pr1[i];
  //       m++;
  //     }
  //   }
  //   pr = RL;
  // }
  /*
 * --------------- @author: nguyenvanquan7826 ---------------
 * ----------------- nguyenvanquan7826.com ------------------
 */

//   #include <winbgim.h>
// #include <iostream>
// #include <fstream>
// #include <sstream>
// #include <string>
// #include <iomanip>
// #include <cstdlib>
// #include <ctime>
// #define INP "input.txt"
//   #define OUT "output.txt"
//   #define dong 20
// using namespace std;

// typedef struct tientrinh {
// 	char name[30];
// 	int timeRL, timeCPU, timeOUT, timeIN;
// } TT;
// FILE * f;

// TT * input1(int & n); //nhap tay
// TT * input2(int & n); //nhap file
// void output(TT t[], TT tt[], int n); // out KQ ra console
// void outputGRP(TT tt[], TT t[], int n); //out KQ ra graaphics
// TT * process_SJF_E(TT t[], int n); //thuat toan uu tien thoi gian xu ly ngan, doc quyen
// void table_input(TT t[], int n, int x1, int y1, int x2, int y2); //Bang intput
// void table_output(TT t[], int n, int x1, int y1, int x2, int y2); //bang output
// void inittable(int n, int x1, int y1, int x2, int y2); //tao bang

// TT * input1(int & n) {
//   TT * t;
//   /*cout<<"Nhap vao so tien trinh: ";
//    cin>>n;*/
//   srand(time(NULL));
//   n = 3 + rand() % 7;
//   t = new TT[n];
// 	char a[10][30] = { "P1", "P2", "P3", "P3", "P5", "P6", "P7", "P8", "P9" };
//   for (int i = 0; i < n; i++) {
//     fflush(stdin);
//     strcpy(t[i].name, a[i]);
//     //t[i].name = a[i];
//     t[i].timeRL = rand() % 30;
//     t[i].timeCPU = rand() % 30;
//   }
//   return t;
// }

// TT * input2(int & n) {
//   TT * t;
//   ifstream in (INP);
// 	in >> n;
//   t = new TT[n];
//   for (int i = 0; i < n; i++) {
// 		in >> t[i].name;
// 		in >> t[i].timeRL;
// 		in >> t[i].timeCPU;
//   }
//   return t;
// 	in.close();
// }

// // Nhap tu ban phim
// TT * input3(int & n) {
//   TT * t;
//   cout << "Nhap so tien trinh: ";
//   cin >> n;
//   t = new TT[n];
//   for (int i = 0; i < n; i++) {
//     cout << "Nhap ten tien trinh " << i << ": ";
//     cin >> t[i].name;
//     cout << "Nhap thoi gian san sang: ";
//     cin >> t[i].timeRL;
//     cout << "Nhap thoi gian CPU chay: ";
//     cin >> t[i].timeCPU;
//   }
//   return t;
// }


// //TT *process_SJF_NE(TT t[], int n, int &time) //non-exclusive

// TT * process_SJF_E(TT t[], int n) //exclusive
// {
// 	int timeOUT = 0;
//   for (int i = 0; i < n; i++) {

//     if (t[i].timeRL >= timeOUT) {
//       for (int j = i + 1; j < n; j++) {
//         /* neu thoi gian RL cua j < cua i
//         * Hoac bang nhau nhung thoi gian CPU cua j phai nho hon cua i 
//         * thi moi cho j vao truoc i
//         */
//         if ((t[j].timeRL < t[i].timeRL)
//           || (t[j].timeRL == t[i].timeRL
//             && t[j].timeCPU < t[i].timeCPU)) {
// 					TT temp = t[i];
//           t[i] = t[j];
//           t[j] = temp;
//         }
//       }
//     } else //nho hon time OUT cua tien trinh i dang chay
//     {
//       for (int j = i + 1; j < n; j++)
//       /*
//       * Neu thoi gian CPU cua tien trinh j < cua tien trinh i
//       * Hoac bang nhau nhung thoi gian RL cua j phai nho hon cua i thi moi cho j vao truoc i.
//       */
//       if ((t[j].timeCPU < t[i].timeCPU) || (t[j].timeCPU == t[i].timeCPU && t[j].timeRL < t[i].timeRL)) {
// 					TT temp = t[i];
//         t[i] = t[j];
//         t[j] = temp;
//         cout << "doi cho " << i << " & " << j << "\n";
//       }



//     }
//     for (int j = 0; j < n; j++) {
//       cout << t[j].name << "   ";
//     }
//     cout << "\n";

//     if (i == 0) {
//       t[i].timeIN = t[i].timeRL;
//       t[i].timeOUT = t[i].timeIN + t[i].timeCPU;
//     } else {
//       if (t[i].timeRL < t[i - 1].timeOUT)
//         t[i].timeIN = t[i - 1].timeOUT;
//       else
//         t[i].timeIN = t[i].timeRL;
//       t[i].timeOUT = t[i].timeIN + t[i].timeCPU;
//     }
//     timeOUT = t[i].timeOUT;
//   }
//   return t;
// }

// void output(TT t[], TT tt[], int n) {
// 	ofstream out(OUT);
//   cout << setw(10) << "Process" << setw(20) << "Time ready list" << setw(20)
//     << "time CPU" << endl;
//   for (int i = 0; i < n; i++) {
//     cout << setw(10) << t[i].name << setw(20) << t[i].timeRL << setw(20)
//       << t[i].timeCPU << endl;
//   }
//   cout << endl << "-----------------------" << endl;
//   cout << setw(10) << "Process" << setw(20) << "Time IN" << setw(20)
//     << "Time OUT" << endl;
//   out << setw(10) << "Process" << setw(20) << "Time IN" << setw(20)
//     << "Time OUT" << endl;
//   for (int i = 0; i < n; i++) {
//     cout << setw(10) << endl << tt[i].name << setw(20) << tt[i].timeIN
//       << setw(20) << tt[i].timeOUT;
//     out << setw(10) << endl << tt[i].name << setw(20) << tt[i].timeIN
//       << setw(20) << tt[i].timeOUT;
//   }
//   out.close();
// }
// void inittable(int n, int x1, int y1, int x2, int y2) {
//   setfillstyle(1, 9);
//   settextjustify(1, 1);
// 	int zx = (x2 - x1) / 3;
// 	int zy;
//   if (n < 3)
//     zy = dong * 2;
//   else
//     zy = (y2 - y1) / (n + 1);

//   bar(x1 + 2, y1 - zy, x2 - 2, y1 - 2);

//   for (int i = 0; i <= n; i++)
//   for (int j = 0; j < 3; j++)
//   bar(x1 + j * zx + 2, y1 + i * zy + 2, x1 + (j + 1) * zx,
//     y1 + (i + 1) * zy);
// }
// void table_input(TT t[], int n, int x1, int y1, int x2, int y2) {
//   setfillstyle(1, 9);
//   settextjustify(1, 1);
// 	int zx = (x2 - x1) / 3;
// 	int zy;
//   if (n < 3)
//     zy = dong * 2;
//   else
//     zy = (y2 - y1) / (n + 1);

//   inittable(n, x1, y1, x2, y2);

//   outtextxy(x1 + 1 * zx + 2 + zx / 2, y1 - zy / 2, "INPUT");

//   for (int i = 0; i <= n; i++)
//   for (int j = 0; j < 3; j++) {
//     char * s = (char *) malloc(50 * sizeof(char));
//     switch (j) {
//       case 0:
//         if (i == 0)
//           strcpy(s, "Process");
//         else
//           sprintf(s, "%s", t[i - 1].name);
//         break;
//       case 1:
//         if (i == 0)
//           strcpy(s, "Time RL");
//         else
//           sprintf(s, "%d", t[i - 1].timeRL);
//         break;
//       case 2:
//         if (i == 0)
//           strcpy(s, "Time CPU");
//         else
//           sprintf(s, "%d", t[i - 1].timeCPU);
//         break;
//     }
//     outtextxy(x1 + j * zx + 2 + zx / 2, y1 + i * zy + 5 + zy / 2, s);
//   }
// }

// void table_output(TT t[], int n, int x1, int y1, int x2, int y2) {
//   setfillstyle(1, 9);
//   settextjustify(1, 1);
// 	int zx = (x2 - x1) / 3;
// 	int zy;
//   if (n < 3)
//     zy = dong * 2;
//   else
//     zy = (y2 - y1) / (n + 1);

//   inittable(n, x1, y1, x2, y2);

//   outtextxy(x1 + 1 * zx + 2 + zx / 2, y1 - zy / 2, "PROCESS");

//   for (int i = 0; i <= n; i++)
//   for (int j = 0; j < 3; j++) {
//     char * s = (char *) malloc(50 * sizeof(char));
//     switch (j) {
//       case 0:
//         if (i == 0)
//           strcpy(s, "Process");
//         else
//           sprintf(s, "%s", t[i - 1].name);
//         break;
//       case 1:
//         if (i == 0)
//           strcpy(s, "Time IN");
//         else
//           sprintf(s, "%d", t[i - 1].timeIN);
//         break;
//       case 2:
//         if (i == 0)
//           strcpy(s, "Time OUT");
//         else
//           sprintf(s, "%d", t[i - 1].timeOUT);
//         break;
//     }
//     outtextxy(x1 + j * zx + 2 + zx / 2, y1 + i * zy + 5 + zy / 2, s);
//   }
// }

// void outputGRP(TT tt[], TT t[], int n) {
// 	//string a[10] = {"P1","P2","P3","P3","P5","P6","P7","P8","P9"};

// 	int mh = EGA, mode = EGALO;
//   initgraph(& mh, & mode, "");

// 	int x = 200, y = 200, khoangcach = 15;
// 	int tile = 1100 / t[n - 1].timeOUT;
// 	int z = tile * t[n - 1].timeOUT;
// 	int xI[n], xO[n], xRL[n];
// 	int yI = y - 2 * dong;
// 	int yO = y + 5 * dong;
// 	int yT = y - dong;
// 	int yRL = y + 4 * dong;
//   for (int i = 0; i < n; i++)
//   xRL[i] = x + t[i].timeRL * tile;

//   setbkcolor(1);
//   cleardevice();

//   setcolor(15);
//   settextstyle(0, 0, 2);
//   outtextxy(20, 10, "nguyenvanquan7826");
//   settextjustify(1, 1);

//   setcolor(14);
//   for (int i = 0; i < 5; i++)
//   rectangle(x - i, y - i, x + z + i, y + 2 * dong + i);
//   bar(x, y, x + z, y + 2 * dong);

//   settextstyle(0, 0, 3);
//   outtextxy(700, 50, "PROCESS CPU SHORTEST JOB FIRST");

//   settextstyle(0, 0, 2);

// 	int xt1 = 200, yt1 = 400, dai = 500, rong = 250;
//   table_input(tt, n, xt1, yt1, xt1 + dai, yt1 + rong);
//   table_output(t, n, xt1 + 30 + dai, yt1, xt1 + 30 + 2 * dai, yt1 + rong);

//   outtextxy(x - 100, yI, "INPUT -->");
//   outtextxy(x - 100, yO, "OUTPUT -->");
//   outtextxy(x - 100, yT, "TIME -->");
//   outtextxy(x - 100, yRL, "TIME RL -->");
//   outtextxy(x - 100, y + dong, "PROCESS -->");

//   settextstyle(0, 0, 1);
//   delay(500);

//   char * s = (char *) malloc(sizeof(char));

//   xI[0] = x + t[0].timeIN * tile;
//   xO[0] = x + t[0].timeOUT * tile;
// 	int yI1 = yI, yO1 = yO, yT1 = yT, xm = xI[0];
//   for (int i = 0; i < n; i++) {
//     if (i > 0) {
//       if (xRL[i] < xO[i - 1])
//         xI[i] = xO[i - 1];
//       else
//         xI[i] = xRL[i];
//       xO[i] = xI[i] + t[i].timeCPU * tile;
//     }

//     if (i > 0 && xO[i - 1] - xm >= khoangcach)
//       xm = xO[i - 1];
//     if (i > 0 && xO[i - 1] - xm != 0) {
//       yI1 = yI1 - 2 * dong;
//       yT1 = yT1 - 2 * dong;
//     } else {
//       yI1 = yI;
//       yT1 = yT;
//     }

//     outtextxy(xI[i], yI1, t[i].name);
//     sprintf(s, "%d", t[i].timeIN);
//     outtextxy(xI[i], yT1, s);
//     outtextxy(xRL[i], yRL, t[i].name);

// 		int j;
//     setfillstyle(1, 2 + (9 + i) % 12);
//     for (j = 0; j < t[i].timeCPU; j++) {
//       delay(200);
//       bar(xI[i], y, xI[i] + (j + 1) * tile, y + 2 * dong);
//       for (int k = 0; k < n; k++)
//       if (xI[i] + (j + 1) * tile > xRL[k]) {
//         sprintf(s, "%d", t[k].timeRL);
//         outtextxy(xRL[k], yT, s);

//         outtextxy(xRL[k], yRL, t[k].name);
//         line(xRL[k], y + 2 * dong, xRL[k], y + 3 * dong);
//       }
//     }
//     sprintf(s, "%d", t[i].timeOUT);
//     outtextxy(xO[i], yT, s);
//     line(xO[i], y, xO[i], y + 2 * dong);
//     if (xO[i] - xm <= khoangcach)
//       yO1 = yO1 + dong;
//     else
//       yO1 = yO;

//     outtextxy(xO[i], yO1, t[i].name);
//   }
//   sprintf(s, "%d", t[n - 1].timeOUT);
//   outtextxy(xO[n - 1], yT, s);

//   getch();
// }

// int main() {
//   TT * t, * tt;
// 	int n;
//   t = tt = input2(n);
//   tt = process_SJF_E(tt, n);
//   output(t, tt, n);

//   outputGRP(t, tt, n);

//   return 0;
// }


}
