import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoPortalService {
  private targets: Map<string, ViewContainerRef>;

  constructor() { 
    this.targets = new Map<string, ViewContainerRef>();
  }

  getTarget(targetName: string): ViewContainerRef {
    return this.targets.has(targetName) ? this.targets.get(targetName): null;
  }

  addTarget(targetName: string, viewContainer:ViewContainerRef): void {
    this.targets.set(targetName, viewContainer);
  }

  clearTarget(targetName: string): void {
    this.getTarget(targetName).clear();
  }

  attachToTarget(targetName: string, template: TemplateRef<any>): void {
    this.getTarget(targetName).createEmbeddedView(template);
  }
}
