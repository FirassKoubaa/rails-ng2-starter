import {Component, OnInit}              from 'angular2/core'
import {RouteParams}  from 'angular2/router'

@Component({
    selector: 'home',
    templateUrl: '/app/home.component.html'
})
export class HomeComponent implements OnInit{
    constructor(private _routeParams: RouteParams){}

    message: String = 'Rails Ng2 Starter'
    ngOnInit(){

    }

}
