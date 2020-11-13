import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';
import { HttpClient } from '@angular/common/http';
import { Repository } from './../repository';
import { User } from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

users:User;
repo:Repository;


  constructor(private searchService: SearchService) { }

  githubUser(searchName:any){
        this.searchService.githubUser(searchName).then((success)=>{ 
          this.users=this.searchService.users;
          
        }, (error)=>{ console.log(error) })    
                 
        this.searchService.getUserrepos(searchName).then((success)=>{
          this.repo=this.searchService.repo;
          
        },
         (error)=>{ console.log(error)})
  }

  ngOnInit(): void {
    this.githubUser("EveNyarango");
  }

}
