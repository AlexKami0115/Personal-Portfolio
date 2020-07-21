import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  // skillsData: any = [
  //   {
  //     'id': '1',
  //     'skill': '',
  //     'progress': ''
  //   },
  //   {
  //     'id': '2',
  //     'skill': '',
  //     'progress': ''
  //   },
  //   {
  //     'id': '3',
  //     'skill': '',
  //     'progress': ''
  //   },
  //   {
  //     'id': '4',
  //     'skill': '',
  //     'progress': ''
  //   },
  //   {
  //     'id': '5',
  //     'skill': '',
  //     'progress': ''
  //   },
  //   {
  //     'id': '6',
  //     'skill': '',
  //     'progress': ''
  //   }
  // ];

  // educationData: any = [
  //   {
  //     'id': '1',
  //     'from_to_year': '',
  //     'education': '',
  //     'stream': '',
  //     'institution': ''
  //   },
  //   {
  //     'id': '2',
  //     'from_to_year': '',
  //     'education': '',
  //     'stream': '',
  //     'institution': ''
  //   },
  //   {
  //     'id': '3',
  //     'from_to_year': '',
  //     'education': '',
  //     'stream': '',
  //     'institution': ''
  //   }
  // ];

  // exprienceData: any = [
  //   {
  //     'id': '1',
  //     'from_to_month_year': ',
  //     'organization': '',
  //     'designation': '',
  //     'details': 
  //   },
  //   {
  //     'id': '2',
  //     'from_to_month_year': '',
  //     'organization': '',
  //     'designation': '',
  //     'details': ''
  //   },
  //   {
  //     'id': '3',
  //     'from_to_month_year': '',
  //     'organization': '',
  //     'designation': '',
  //     'details': ''
  //   }
  // ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  // skills(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'skills');
  //   return this.skillsData;
  // }

  // education(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'education');
  //   return this.educationData;
  // }

  // exprience(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'exprience');
  //   return this.exprienceData;
  // }
}
