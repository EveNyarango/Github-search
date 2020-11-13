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
        this.users.name = getResponse.name;
        this.users.html_url = getResponse.html_url;
        this.users.login = getResponse.login;
        this.users.avatar_url = getResponse.avatar_url;
        this.users.public_repos = getResponse.public_repos;
        this.users.created_at = getResponse.created_at;
        this.users.followers = getResponse.followers;
        this.users.following = getResponse.following;
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
          this.newRepository = getRepoResponse;
          resolve();
      }, error => {
          reject(error);
      });
  });
  return myPromise;

  }

  gitRepos(searchName){
    interface ApiResponse{
      items:any;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.myApi).toPromise().then(getRepoResponse => {
          this.searchRepo = getRepoResponse.items;

          resolve();
      }, error => {
          this.searchRepo = 'error';
          reject(error);
      });
  });
  return promise;
  }
}

