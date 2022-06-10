import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPropertyInterface } from '../property/property-list/IProperty-Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties(SellRent : number):Observable<IPropertyInterface[]>{
  return this.http.get<IPropertyInterface[]>('data/properties.json').pipe(
    map(data=> {
      const propertiesArray: Array<IPropertyInterface> = [];
      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
        propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
  );
}
}
