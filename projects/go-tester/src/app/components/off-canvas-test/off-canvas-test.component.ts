import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, concat, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'off-canvas-test',
  templateUrl: './off-canvas-test.component.html'
})
export class OffCanvasTestComponent {
  selectControl: FormControl = new FormControl();
  selectData: any = [{
    value: 1,
    name: 'Harry'
  }, {
    value: 2,
    name: 'Hermione'
  }, {
    value: 3,
    name: 'Ron'
  }, {
    value: 4,
    name: 'Voldermort'
  }, {
    value: 5,
    name: 'Snake'
  }];

  selectData2: any = [];

  
  // ngOnInit(){
  //   this.selectControl.valueChanges.pipe(
  //     debounceTime(600), // Delay user input
  //     map((input) => [input])
  //   )
        
  //       // this.selectData = concat(
  //       //   of([]),
  //       //   this.itemInput.pipe(
  //       //     debounceTime(600), // Delay user input
  //       //     map((input) => [input])
  //       //   )
  //       // );
  //    }
}
