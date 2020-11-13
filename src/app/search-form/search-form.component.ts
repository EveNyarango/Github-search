import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from './../search';
@Component({
  selector: 'app-search-form',
  templateUrl:'./search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName:string;
@Output () getName = new EventEmitter<any>();
   
searchFor(){
  this.getName.emit(this.searchName)
 
}
constructor() { }


  ngOnInit(): void {
  }

}
