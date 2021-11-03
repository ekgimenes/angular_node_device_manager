import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-readcategory',
  templateUrl: './readcategory.component.html',
  styleUrls: ['./readcategory.component.css']
})
export class ReadcategoryComponent implements OnInit {
  displayedColumns = ['Id', 'CategoryName']
  constructor(private service : ApiService) { }

  dataSource:any;

  ngOnInit(): void {
    this.service.getCategories().subscribe((res)=> {
      console.log(res);
      this.dataSource = res.data;
    });
  }
}
