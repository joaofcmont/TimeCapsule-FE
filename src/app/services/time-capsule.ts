import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TimeCapsule } from '../time-capsule.model';

@Injectable({
  providedIn: 'root'
})
export class timeCapsuleService {
  private apiUrl = 'http://localhost:8080' //be conenction

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient){}

  getAllTimeCapsules(): Observable<TimeCapsule[]>{
    return this.http.get<TimeCapsule[]>(`${this.apiUrl}/time-capsules`)
      .pipe(catchError(this.handleError));
  }

  getTimeCapsuleById(id: number): Observable<TimeCapsule>{
    return this.http.get<TimeCapsule>(`${this.apiUrl}/time-capsules/${id}`);
  }

  createTimeCapsule(timeCapsule: TimeCapsule): Observable<TimeCapsule> {
    return this.http.post<TimeCapsule>(`${this.apiUrl}/time-capsule`,timeCapsule,this.httpOptions);
  }


  private handleError(error: any){
    console.log('An error ocurred:', error)
    return throwError(()=>error);
  }
}
