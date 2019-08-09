import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
}