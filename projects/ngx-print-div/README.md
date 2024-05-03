# ngx-print-div

Ngx-Print-Div is a simple Angular library that allows you to print HTML content by specifying its ID. It provides a directive that can be added to any HTML element to enable printing functionality.

## Installation

To install the library in your Angular project, you can use npm or yarn:

```bash
  npm install ngx-print-div
```

or

```bash
  yarn add ngx-print-div
```

## Usage/Examples

### Import the Module

Import the NgxPrintDivModule in your Angular module:

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxPrintDivModule } from "ngx-print-div";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPrintDivModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Use the Directive

Add the NgxPrintDiv directive to any HTML element that you want to enable printing for. You can also specify a custom print title, choose whether to print in a new window, and add your own custom class to the body:

```html
<button NgxPrintDiv="print-calendar" [printTitle]="'Custom Print Title'" [printInNewWin]="true" [bodyClass]="'my-custom-body-class'">Print</button>
```

If you are adding bodyClass, remember to define the class in your styles.css/styles.scss file.

```css
.my-custom-body-class {
  background-color: black;
  color: white;
}
```

## Functionality

The library provides two main functions:

#### Print Div By ID:

Prints the content of an HTML element with a specified ID in the current tab.

#### Print Div In New Window:

Prints the content of an HTML element with a specified ID in a new browser window.
