import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'input-range',
  templateUrl: './inputRange.component.html',
})
export class InputRange {
  changeZoom(event) {
    console.log(event.target.value);
  }
}
