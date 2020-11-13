import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Repository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: User;
  repo: Repository;
  UserName:any;
  newRepository:any;
  searchMe:any;
  searchRepo:any;

  constructor(private http: HttpClient) {
    this.users = new User("", "", "", "", 0, new Date(), 0, 0);
    this.repo = new Repository("", "", "", "", new Date());
  }
  githubUser(searchName: string) {
    interface ApiResponse {
      html_url: string,
      name: string,
      login: string,
      avatar_url: string,
      public_repos: number,
      created_at: Date,
      followers: number,
      following: number,
    }

    const promise = new Promise((resolve) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.myApi).toPromise().then(getResponse => {
       
        this.users = getResponse
        
        resolve();
      });
    });
    return promise;

  }

  getUserrepos(searchMe){
    interface ApiResponse{
      html_url: string,
      name: string,
       description:string,
       language:string,
       created_at: Date
    }
    
    const myPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.myApi).toPromise().then(getRepoResponse => {
          this.repo = getRepoResponse;
          
          resolve();
      }, error => {
          reject(error);
      });
  });
  return myPromise;

  }


}

