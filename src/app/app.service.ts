import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Injectable()

export class AppService {

    private _localData = '../api/project_search_challenge_data.json';

    constructor(private _http: HttpClient) {}

    private handleError(error: Response | any) {
        return Observable.throw(error.json().error || 'server Error');
    }

    getData () {
        return this._http.get(this._localData);
    }
}
