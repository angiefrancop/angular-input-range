import { Component, EventEmitter, Output, VERSION } from '@angular/core';

@Component({
  selector: 'input-range',
  templateUrl: './inputRange.component.html',
  styleUrls: ['./inputRange.component.css'],
})
export class InputRange {
  @Output() outputValue = new EventEmitter<number>();

  valueP = 100;

  changeZoom(event) {
    console.log(event.target.value);
    console.log(this.valueP);
    this.valueP = (event.target.value / 30000000) * 100;
    this.outputValue.emit(event.target.value);
  }
}
