import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class coinsData{

  Data:Array<any>=[]
  kucoinList:Array<any>=[];
  dataSubject: BehaviorSubject<any>=new BehaviorSubject('')

  constructor(private http: HttpClient) {}

  url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

  kucoinurl = 'https://api.coingecko.com/api/v3/exchanges/kucoin/tickers';

  getCoindetails() {
    const options = {
      headers: { 'X-CMC_PRO_API_KEY': 'fe7d55bb-1fcd-432b-a60e-7df860ae1188' },
      params: { start: 1, limit: 100 },
    };
    return this.http.get(this.url, options);
  }

  getKucoinCoins() {
    const header = { accept: 'application/json' };
    for (let i = 0; i < 14; i++) {
      let param = { id: 'kucoin', page: i };
      this.http
        .get(this.kucoinurl, { headers: header, params: param })
        .subscribe((d: any) => {
          let tick = d.tickers.map((el: any) => {
            return el.base;
          });
          this.kucoinList = [...this.kucoinList, ...tick];
        });
    }
  }
}
