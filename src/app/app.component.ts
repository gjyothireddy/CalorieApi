import { Component } from '@angular/core'; 
import { Calories } from 'calorie.model';
import { CaloriesService } from './calories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calorieApi';
  //myimage:string=" assets/images/food.jpg"
  constructor(private calories:CaloriesService)
  {

  }
  ngOnInit():void{
    this.getCalApi();
  }

  calorie:Calories[]=[]
  cal=new Calories();
  searchItem="";

  getCalApi()
  {
    this.calories.getCalories(this.searchItem).subscribe(
      data=>{
        let calories=JSON.parse(JSON.stringify(data));
        this.cal.calories=calories.items[0].calories;

        this.cal.fiber_g=calories.items[0].fiber_g;
        this.cal.serving_size_g=calories.items[0].serving_size_g;
        this.cal.sodium_mg=calories.items[0].sodium_mg;
        this.cal.name=calories.items[0].name;
        this.cal.potassium_mg=calories.items[0].potassium_mg;
        this.cal.fat_saturated_g=calories.items[0].fat_saturated_g;
        this.cal.fat_total_g=calories.items[0].fat_total_g;
        this.cal.cholesterol_mg=calories.items[0].cholesterol_mg;
        this.cal.carbohydrates_total_g=calories.items[0].carbohydrates_total_g;
        this.cal.protein_g=calories.items[0].protein_g;
        this.cal.sugar_g=calories.items[0].sugar_g;
        console.log(this.cal);
      },
      error=>{
        console.log(error);

      }
      
    )
  }
  
  
  


}
