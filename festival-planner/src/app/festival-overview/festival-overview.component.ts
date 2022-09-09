import { Component } from '@angular/core';
import {Festival} from "../../interfaces/festival.interface.";

@Component({
  selector: 'festival-overview',
  templateUrl: './festival-overview.component.html',
  styleUrls: ['./festival-overview.component.css']
})
export class FestivalOverviewComponent {
  festivals: Festival[] = [
    {name: "Hard CVLTR", date: "20-10-2022", timeFrame: "17.00-00.00", price: 20.00},
    {name: "Rebellion", date: "30-12-2022", timeFrame: "13.00-00.00", price: 50.00},
  ];
}
