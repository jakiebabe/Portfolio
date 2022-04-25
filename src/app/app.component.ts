import { Component, OnInit } from '@angular/core'; 
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent implements OnInit{

  date: Date = new Date();
  title = 'Portfolio';
  name = 'Jake';

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
