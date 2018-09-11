import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { Users } from '../../modeles/users';
import { navItems } from './../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  currentUser: Users;

  constructor(private userService: UsersService) {
    //console.log(localStorage.getItem('currentUser'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() { 
    
}
  logout(){
    localStorage.removeItem('currentUser');

  }
}
