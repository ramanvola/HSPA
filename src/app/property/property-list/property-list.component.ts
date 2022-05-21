import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { IPropertyInterface } from './IProperty-Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IPropertyInterface> | undefined ;
  constructor(private housingService:HousingService) { }

  ngOnInit() {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }
    )
  }
}
