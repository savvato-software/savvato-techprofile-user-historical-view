import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

	// This is a hack. The problem was that the allUserSessionsListing page doesn't receive the ctrl 
	//  object that is passed in to the savvato-techprofile-user-historical-view component. I needed
	//  a way to pass the value received from the controller to this down-the-line page. 

	value = undefined;

	constructor() { 

	}

	setValue(val) {
		this.value = val;
	}

	getValue() {
		return this.value;
	}
}
