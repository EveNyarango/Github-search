import { Component, OnInit } from '@angular/core';
import { Repository } from './../repository';
import { User } from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public searchMe = 'EveNyarango';
public githubUser: string;
users:User;
repo:Repository;

findUser(username){
  this.githubUser = '';
  this.searchMe;
}
  constructor() { }

  ngOnInit(): void {
  }

}
