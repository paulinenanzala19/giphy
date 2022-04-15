import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  trendingGifs!:any

  constructor(private giphyService:GiphyService) { }

  ngOnInit(): void {
    this.giphyService.trendingGifs().subscribe(response=>{
      this.trendingGifs=response['data']
      console.log(this.trendingGifs)
    })
  }

}
