import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public searchMe = 'EveNyarango';
public githubUser: string;

findUser(username){
  this.githubUser = '';
  this.searchMe;
}
  constructor() { }

  ngOnInit(): void {
  }

}
