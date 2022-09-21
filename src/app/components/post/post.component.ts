import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Loading the correct id when the page load
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
