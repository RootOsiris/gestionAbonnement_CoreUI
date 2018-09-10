import { Component, OnInit, OnDestroy, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Subscription } from 'rxjs';

// such override allows to keep some initial values

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'alerts.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
  .alert-md-local {
    background-color: #009688;
    border-color: #00695C;
    color: #fff;
  }
  `
  ],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})


export class AlertsComponent {
  
  private subscription: Subscription;
  message: any;
  
  constructor(sanitizer: DomSanitizer,) {}
 
  ngOnInit() {
   // this.subscription = this.alertService.getMessage().subscribe(message => { 
    //    this.message = message; 
   //});
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
