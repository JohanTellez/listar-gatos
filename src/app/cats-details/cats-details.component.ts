import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cats-details',
  templateUrl: './cats-details.component.html',
  styleUrls: ['./cats-details.component.css']
})
export class CatsDetailsComponent implements OnInit {

  constructor(
    public catServices: CatsService,
    private route: ActivatedRoute,
  ) { }

  catDetail:any = [];

  ngOnInit(): void {
    this.detailCat()
  }

  detailCat(){
    this.catServices.detailCat().subscribe((resp)=>{console.log(resp); this.catDetail=resp, console.log(this.catDetail) })
  }

}
