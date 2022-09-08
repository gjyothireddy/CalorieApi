import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {
  static getCalories(arg0: string) {
    throw new Error('Method not implemented.');
    
  }
  calorie: any;
  carbohydrates_total_g: any;

  constructor(private http:HttpClient) { }

  getCalories(query:string)
  {
    let headers=new HttpHeaders().set('x-api-key','9nRUa7zx7mW+RnW+8hDFgg==sfMlUkwX2IZB69Vn')
return this.http.get('https://api.calorieninjas.com/v1/nutrition?query='+query,{headers});
  }
}

