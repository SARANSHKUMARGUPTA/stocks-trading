      
export interface StocksModel {

      "symbol": string;
      "companyName": string;
      "primaryExchange": string;
      "sector": string;
      "calculationPrice": string;
      "open": number;
      "openTime": number;
      "close": number;
      "closeTime":number;
      "high":number;
      "low":number;
      "latestPrice":number;
      "latestSource": string;
      "latestTime": string;
      "latestUpdate": number;
      "latestVolume": number;
      "iexRealtimePrice": number;
      "iexRealtimeSize": number;
      "iexLastUpdated": number;
      "delayedPrice": number;
      "delayedPriceTime": number;
      "extendedPrice": number;
      "extendedChange": number;
      "extendedChangePercent": number;
      "extendedPriceTime": number;
      "previousClose": number;
      "change": number;
      "changePercent": number;
      "iexMarketPercent": number;
      "iexVolume": number;
      "avgTotalVolume": number;
      "iexBidPrice": number;
      "iexBidSize": number;
      "iexAskPrice": number;
      "iexAskSize": number;
      "marketCap": number;
      "peRatio": number;
      "week52High": number;
      "week52Low": number;
      "ytdChange": number;

}


export interface StockDetail {
      chart: ChartModel[];
      quote: Quote;
      news: News;

}
export interface ChartModel
      {  
         "date": Date;
         "open": number;
         "high": number;
         "low": number;
         "close": number;
         "volume": number;
         "unadjustedVolume": number;
         "change": number;
         "changePercent": number;
         "vwap": number;
         "label": string;
         "changeOverTime": number
      }

export interface Quote {  

      "symbol": string;
      "companyName": string;
      "primaryExchange": string;
      "sector": string;
      "calculationPrice": string;
      "open": number;
      "openTime": number;
      "close": number;
      "closeTime": number;
      "high": number;
      "low": number;
      "latestPrice": number;
      "latestSource": string;
      "latestTime": string;
      "latestUpdate": number;
      "latestVolume": number;
      "iexRealtimePrice": number;
      "iexRealtimeSize": number;
      "iexLastUpdated": number;
      "delayedPrice": number;
      "delayedPriceTime": number;
      "extendedPrice": number;
      "extendedChange": number;
      "extendedChangePercent": number;
      "extendedPriceTime": number;
      "previousClose": number;
      "change": number;
      "changePercent": number;
      "iexMarketPercent": number;
      "iexVolume": number;
      "avgTotalVolume": number;
      "iexBidPrice": number;
      "iexBidSize": number;
      "iexAskPrice": number;
      "iexAskSize": number;
      "marketCap": number;
      "peRatio": number;
      "week52High": number;
      "week52Low": number;
      "ytdChange": number;
   }     

   export interface News 
      {  
         "datetime": Date;
         "headline": string;
         "source": string;
         "url": string;
         "summary": string;
         "related":string;
         "image": string;
      }

   export interface StockNameSymbol
   {
      "Symbol" : string;
      "Description" : string;
   }

   export class HighLowData 
   {
      "highValue" : number;
      "lowValue" : number;
      "date": Date;
      "highDifference" : number;
      "lowDifference" : number;
      "previousClose" : number;
   }