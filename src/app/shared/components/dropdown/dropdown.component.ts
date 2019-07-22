import { Component, Input, OnChanges } from '@angular/core';
import { City } from '../../models/city.model';
import {GetDropDownDataService} from '../../services/get-dropdown-data.service';
@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {
  @Input() apiUrl :string;
 public show : boolean = false;
 public cities: City = new City();
 selectedItemTitle :string = null;
  constructor(private DropDownDataService:GetDropDownDataService) {

  }
  ngOnChanges(changes): void {

    if(changes["apiUrl"]){
    this.DropDownDataService.get(this.apiUrl).subscribe((data : City) => {
      data =  new City(data);
        this.cities = data;
    });
  }
  }
  CloseList(){
    this.show = false;

  }
  selectedItem(cityName :string){
    for (var val in this.cities) {
      var selectedCityName =   this.cities[val];
      if (selectedCityName == cityName) {
          this.selectedItemTitle = this.cities.toShow;
          this.CloseList();
          return false;
      }
    }
 }

}
