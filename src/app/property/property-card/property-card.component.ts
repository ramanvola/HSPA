import { Component, Input, OnInit } from '@angular/core';
import { IPropertyInterface } from '../property-list/IProperty-Interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property : IPropertyInterface | undefined
  constructor() { }


  ngOnInit() {
  }

}
