import { Component, OnInit } from '@angular/core';
import { CatsService } from '../services/cats.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public catServices: CatsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  cats:any = [];

  ngOnInit(): void {
    this.obtenCats()
  }

  obtenCats(){
    this.catServices.getCats().subscribe((resp)=>{console.log(resp); this.cats=resp })
  }

  pageSize = 5;
}
