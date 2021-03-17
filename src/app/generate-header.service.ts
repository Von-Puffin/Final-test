import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

 

@Injectable({

  providedIn: 'root',

})

export class GenerateHeaderService {

  constructor() {}

 

  public static getStandardApiCallHeader(): HttpHeaders {

    return new HttpHeaders({

      'Content-Type': 'application/json',

      Accept: 'application/json',

      'Access-Control-Allow-Origin': '/',

      'Cache-Control': 'no-store',

    });

  }

}