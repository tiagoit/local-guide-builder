// https://malcoded.com/posts/angular-file-upload-component-with-express

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/api/upload';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {}

  public upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const req = new HttpRequest('POST', url, formData);
    return this.http.request(req);
  }

  public delete(fileUrl: String): Observable<any> {
    console.log('delete: ', fileUrl);
    const req = new HttpRequest('DELETE', url, {fileUrl: fileUrl});
    return this.http.request(req);
  }
}
