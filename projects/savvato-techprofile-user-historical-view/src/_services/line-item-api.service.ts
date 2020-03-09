import { Injectable } from '@angular/core';
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class LineItemAPIService {

	environment = undefined;

	constructor(private _apiService: ApiService) {

	}

	_init(env) {
		this.environment = env;
	}

	getLineItem(lineItemId) {
	  	let url = this.environment.apiUrl + "/api/techprofile/lineitem/" + lineItemId;

		let rtn = new Promise(
			(resolve, reject) => {
				this._apiService.getUnsecuredAPI(url).subscribe(
					(data) => { 
						console.log("Line Item Received!");
						console.log(data);

						resolve(data);
					}, (err) => {
						reject(err);
					});
			});

		return rtn;
	}
}
