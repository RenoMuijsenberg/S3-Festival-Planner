import {Component, Input} from '@angular/core';
import {Festival} from "../../interfaces/festival.interface";

@Component({
  selector: 'festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent {
  @Input() festival!: Festival;
}
