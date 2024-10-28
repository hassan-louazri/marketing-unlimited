import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  private url = '/api/send-form';
  
  constructor(private http: HttpClient) { }
  sendFormData(form: NgForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.url, form, { headers });
  }
}

