import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProfile(profileName) {
    const endpoint = `https://api.github.com/users/${profileName}`;
    return this.http
        .get(endpoint, {headers: this.headers})
        .toPromise()
        .then(res => { return res.json(); })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An Error Occured: ', error);
    return Promise.reject(error.message || error);
  }

}
