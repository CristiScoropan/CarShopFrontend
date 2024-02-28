import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Car } from 'src/data/car.data';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit{

  view !: string;
  ngOnInit(): void {
    this.initCarForm()
    this.view = "Car";
  }
  switchView(event: MatTabChangeEvent){
    const tab = event.tab.textLabel
    switch ( tab ) {
      case "Car":
          this.view = "Car"
          break;
      case "Motorcycle":
          this.view = "Motorcycle"
          break;
      case "Truck":
          this.view = "Truck"
          break;
      case "Agriculture":
          this.view = "Agriculture"
          break;
      case "Construction":
          this.view =  "Construction"
          break;
      case "Parts":
          this.view = "Parts"
          break;
      default: 
          this.view = "Car"
          break;
   }
  }

  car !: Car

  carFormGroup !: FormGroup
  motorcycleFormGroup !: FormGroup
  truckFormGroup !: FormGroup
  agricultureFormGroup !: FormGroup
  constructionFormGroup !: FormGroup
  partsFormGroup !: FormGroup

  initCarForm() {
    this.carFormGroup = new FormGroup({
      caroserie: new FormControl(''),
      brand: new FormControl(''),
      fuel : new FormControl(''),
      price : new FormControl(''),
      year : new FormControl(''),
      kilometres : new FormControl('')
    })
  }

  initMotorcycleForm() {
    this.carFormGroup = new FormGroup({
      caroserie: new FormControl(''),
      brand: new FormControl(''),
      type: new FormControl(''),
      price : new FormControl(''),
      year : new FormControl(''),
      kilometres : new FormControl('')
    })
  }

  initTruckForm() {
    this.carFormGroup = new FormGroup({
      type: new FormControl(''),
      brand: new FormControl(''),
      model: new FormControl(''),
      fuel : new FormControl(''),
      price : new FormControl(''),
      year : new FormControl(''),
    })
  }

  initAgricultureForm() {
    this.carFormGroup = new FormGroup({
      type: new FormControl(''),
      brand: new FormControl(''),
      model : new FormControl(''),
      price : new FormControl(''),
      year : new FormControl('')
    })
  }

  initConstructionForm() {
    this.carFormGroup = new FormGroup({
      type: new FormControl(''),
      brand: new FormControl(''),
      model : new FormControl(''),
      price : new FormControl(''),
      year : new FormControl(''),
    })
  }

  initPartsForm() {
    this.carFormGroup = new FormGroup({
      typeOfVehicle: new FormControl(''),
      brand: new FormControl(''),
      type : new FormControl(''),
    })
  }

}
