import { Type } from "@angular/core";

export interface GoOffCanvasItem {
  component: Type<{}>;
  bindings: {};
  header?: string;
  type?: "Big" | "small";
}
