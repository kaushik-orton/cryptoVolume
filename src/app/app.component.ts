import { Component, OnInit } from '@angular/core';
import { coinsData } from './coinsData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cmc';
  item:any={}

  constructor(private coin: coinsData){}

  ngOnInit(): void {
   this.callCoinsService()
  }

  callCoinsService=()=>{
    this.coin.getCoindetails().subscribe((d:any)=>{
      d.data.map((el:any)=>{
      this.item.num=this.coin.Data.length+1
      this.item.symbol=el.symbol
      this.item.name=el.name
      this.item.price=el.quote.USD.price
      this.item.volume=el.quote.USD.volume_change_24h.toFixed(2)
      this.item.hr=el.quote.USD.percent_change_1h.toFixed(2)
      this.item.day=el.quote.USD.percent_change_24h.toFixed(2)
      this.item.week=el.quote.USD.percent_change_7d.toFixed(2)
      this.coin.Data.push(Object.assign({},this.item))
      })
      console.log(this.coin.Data)
      this.coin.dataSubject.next(this.coin.Data)
      })
  }
}
