import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  baseurl: string='https://api.giphy.com/v1/gifs/trending?api_key=6oSF6eI4iFMe7UHY2o3BGTVnLdgUZRt7&limit=25&rating=g'

  constructor(private http:HttpClient) { }
}
