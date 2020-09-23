import { Component,  OnInit, Output, EventEmitter} from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  s=0;
  tongs=0;
  n: any;
  x: any;
  i=0;j=0;
  t:any;
  l=1;
  tong=0;
  s8: any;

  Danhsach = [
    {hoten: 'Nguyen Thi Mai', diemthi:9},
    {hoten: 'Tran Thi Anh', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', diemthi:8.3}
  ]
  //bai1
  tinh(sox:string,soL:string){
    for(this.i=1;this.i<=parseFloat(soL);this.i++)
    {
    this.s =this.s+Math.pow(parseFloat(sox),this.i)
    }
  }
//Bài 2

    ngOnInit(): void {
    }
    tinh1(){
      let tmp=1;
      for(let i=1;i<=this.n;++i){
          this.tongs= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/Giaithua(i));
      }
    }

    }
    function Giaithua(a: number) {
    let gt=1;
    for (let i = 1; i <=a; i++) {
      gt*=i;
    }
    return gt;
}
