import { Component, OnInit } from '@angular/core';
import { coinsData } from '../coinsData.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  item:any=[]
  data:any=[]
  kdata:any=[]
  page:number=1

  constructor(private coin:coinsData) { }

  ngOnInit(): void {
   this.coin.dataSubject.subscribe((data:Array<any>)=>{
    this.item=Array.from(data)
    this.item.sort((a:any,b:any)=>{return b.volume-a.volume})
   })

  }


 show(){
//   let test=[...new Set(this.volume.data)]
// //   this.kdata=this.data.filter((d:any)=>{
// //   for (let index = 0; index < test.length; index++) {
// //     if(test.includes(d.symbol)){
// //       return d
// //     }
// //   }
// // })
// this.kdata=test
// console.log(this.kdata,this.kdata.length)
  }

  PageChange(event:any){
    this.page=event
   }
}

