import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { IPropertyInterface } from './IProperty-Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent =1;
  properties: Array<IPropertyInterface> | undefined ;
  constructor(private route: ActivatedRoute, private housingService:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent =2; //
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        //console.log(this.route.snapshot.url.toString());
      }
    )
  }
}
