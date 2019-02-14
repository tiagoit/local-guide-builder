// https://malcoded.com/posts/angular-file-upload-component-with-express

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class UploadService {
  url = `${environment.API_URL}/upload`;

  constructor(private http: HttpClient) {}

  public upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const req = new HttpRequest('POST', this.url, formData);
    return this.http.request(req);
  }

  public delete(fileUrl: String): Observable<any> {
    console.log('delete: ', fileUrl);
    const req = new HttpRequest('DELETE', this.url, {fileUrl: fileUrl});
    return this.http.request(req);
  }
}
