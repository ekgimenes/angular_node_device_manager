import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-readcategory',
  templateUrl: './readcategory.component.html',
  styleUrls: ['./readcategory.component.css']
})
export class ReadcategoryComponent implements OnInit {
  
  displayedColumns = ['Id', 'CategoryName', 'Delete']
  dataSource:any;
  
  constructor(private service : ApiService) { }

  deleteCategory(id : any, name : any){
    if(confirm("Are you sure to delete Category " + name + "?")) {
      this.service.deleteCategory(id).subscribe((id)=> {
        this.ngOnInit();
      });
    }
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe((res)=> {
      this.dataSource = res.data;
       console.log(this.dataSource)
    });
  }
}
