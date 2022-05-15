import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla house",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Erose Villa",
      "Type": "House",
      "Price": 15000
    },
    {
      "Id": 3,
      "Name": "Panwar Sadan",
      "Type": "House",
      "Price": 22000
    },
    {
      "Id": 4,
      "Name": "Kandari house",
      "Type": "House",
      "Price": 22000
    },
    {
      "Id": 5,
      "Name": "Albert Villa",
      "Type": "House",
      "Price": 21000
    },
    {
      "Id": 6,
      "Name": "Asha kutir",
      "Type": "House",
      "Price": 18000
    },
    {
      "Id": 7,
      "Name": "ABS house",
      "Type": "House",
      "Price": 52000
    },
    {
      "Id": 8,
      "Name": "ABC house",
      "Type": "House",
      "Price": 25000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
