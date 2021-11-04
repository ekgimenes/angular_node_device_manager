import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
 
@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  public categoryForm: FormGroup;
  
  constructor(private service : ApiService) {
    this.categoryForm = new FormGroup({
      'CategoryName': new FormControl('', Validators.required)
   });
   }

  public submitCategory(): void {
    if(this.categoryForm.valid){
      this.service.createCategory(this.categoryForm.value).subscribe((res)=> {
        this.categoryForm.reset();
      });
    }else{
      console.log('error creating new category!')
    }
  }

  ngOnInit(): void {
  }
}
