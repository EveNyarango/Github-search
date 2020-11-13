import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
users:User;
repo: Repository;

  constructor(private http:HttpClientModule) { 
    this.users = new User ("", "", "","",0,new Date(),0,0);
    this.repo = new Repository ("", "", "","", new Date());
  }

}
