import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'Task_Details',
  templateUrl: './expansion-steps-example.component.html',
  styleUrls: ['./expansion-steps-example.component.css']
})
export class ExpansionStepsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  step = 0;
  step1=0;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  
  setStep(index: number) {
    this.step = index;
  }

  setStep1(index1: number) {
    this.step1 = index1;
  }

  nextStep() {
    this.step++;
  }

  nextStep1() {
    this.step1++;
  }
  prevStep() {
    this.step--;
  }

  prevStep1() {
    this.step1--;
  }



  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Brehm Holger'},
    {name: 'Shivani Borkar'}
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }




}