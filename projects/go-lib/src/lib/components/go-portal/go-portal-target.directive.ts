import { Directive, OnInit, ViewContainerRef, Input } from '@angular/core';
import { GoPortalService } from './go-portal.service'

@Directive({
  selector: '[goPortalTarget]'
})
export class GoPortalTargetDirective implements OnInit {
  @Input('goPortalTarget') targetName : string;

  constructor(
    private portalService: GoPortalService,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.portalService.addTarget(this.targetName, this.viewContainer);
  }
}
