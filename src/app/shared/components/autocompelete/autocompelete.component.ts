import { Component,  Input, OnChanges } from '@angular/core';
import { City } from '../../models/city.model';
import { GetAutoCompeleteDataService } from '../../services/get-autocomplete-data.service';

@Component({
  selector: 'autocompelete',
  templateUrl: './autocompelete.component.html',
  styleUrls: ['./autocompelete.component.scss']
})
export class AutocompeleteComponent implements OnChanges {

  @Input() apiUrl :string;
  @Input() placeHolderText:string;
  showlist: any;
  show: boolean = false;
  public selectedItemTitle: string;
  public cities: City = new City();

  constructor(
  private  autocompeleteService :GetAutoCompeleteDataService
    ) {
}
closeList(){
  this.show = false;
}
openList(){
  this.show = true;

}
ngOnChanges(changes): void {
  if(changes["apiUrl"]){
  this.autocompeleteService.get(this.apiUrl).subscribe((data : City) => {
      this.cities = data;
  });
}
}
FetchItemDetailsSearch(value:string) {
  if(value == ""){
this.closeList();
    return false;
  }
  for (var val in this.cities) {
    if(val == "nameFa" || val == "nameLat" ){
    var inputKey =   this.cities[val];
      if (inputKey.includes(value)) {
this.openList();
          this.showlist = this.cities.nameFa;
          return false;
      }
    }
  };
}
selectedItem(cityName :string) {

  for (var val in this.cities) {
    var selectedCityName =   this.cities[val];
    if (selectedCityName == cityName) {
        this.selectedItemTitle = this.cities.toShow;
        this.closeList();
        return false;
    }
  }

}
}


