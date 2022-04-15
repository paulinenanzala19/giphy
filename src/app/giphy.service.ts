import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  baseurl: string=`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=25&rating=g`

  constructor(private http:HttpClient) { }
}
