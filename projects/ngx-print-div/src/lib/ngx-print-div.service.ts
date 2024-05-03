import { Injectable } from '@angular/core';

@Injectable()
export class NgxPrintDivService {
  constructor() {}

  printDivById(divId: string, printTitle: string, bodyClass: string) {
    let divElement = document.getElementById(divId);

    let divCopy = divElement!.cloneNode(true);

    let style = document.createElement('style');
    style.textContent = `
        @media print {
          body {
            margin-left: 10px !important;
            -webkit-print-color-adjust: exact; /* Safari and Chrome */
            color-adjust: exact; /* Firefox */
          }
          .hidden {
            display: none;
          }

          #${divId}, #${divId} * {
              page-break-inside: avoid;
          }
        }
      `;

    document.head.appendChild(style);

    // Hide all elements except the div copy
    let elements = document.body.children;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] !== divCopy) {
        elements[i].classList.add('hidden');
      }
    }

    document.title = printTitle;
    document.body.appendChild(divCopy);

    if (bodyClass) {
      document.body.classList.add(bodyClass);
    }

    window.print();

    document.body.removeChild(divCopy);

    document.head.removeChild(style);

    // Restore the display of all elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('hidden');
    }
  }

  printDivInNewWindow(divId: string, printTitle: string, bodyClass: string) {
    const printContent = document.getElementById(divId);
    if (!printContent) {
      console.error(`Div with ID '${divId}' not found.`);
      return;
    }
    const printWindow = window.open('', '_blank', 'width=2000,height=1000');
    if (!printWindow) {
      console.error('Failed to open print window');
      return;
    }

    // Retrieve all CSS styles
    const styles = this.getAllStyles();
    const mediaQueryStyles = this.getMediaQueryStyles();
    let additionalStyle = document.createElement('style');
    additionalStyle.textContent = `
          @media print {
            body {
              margin-left: 10px !important;
              -webkit-print-color-adjust: exact; /* Safari and Chrome */
              color-adjust: exact; /* Firefox */
            }
            
            #${divId}, #${divId} * {
              page-break-inside: avoid;
            }
          }
        `;

    printWindow.document.write(`
      <html>
        <head>
          <title>${printTitle}</title>
          <style>
          ${styles} 
          ${mediaQueryStyles}
          </style>
        </head>
        <body>
        ${printContent.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.head.appendChild(additionalStyle);

    if (bodyClass) {
      console.log('body class: ', bodyClass);
      printWindow.document.body.classList.add(bodyClass);
    }

    const printFunction = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };

    printFunction();
  }

  private getAllStyles(): string {
    const styles: string[] = [];
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const styleSheet = styleSheets[i] as CSSStyleSheet;
      try {
        const cssRules = styleSheet.cssRules;
        if (cssRules) {
          for (let j = 0; j < cssRules.length; j++) {
            const rule = cssRules[j];
            if (rule instanceof CSSStyleRule) {
              styles.push(rule.cssText);
            }
          }
        }
      } catch (error) {
        console.error('Error accessing CSS rules:', error);
      }
    }
    return styles.join('\n');
  }

  private getMediaQueryStyles(): string {
    const mediaQueryStyles: string[] = [];
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const styleSheet = styleSheets[i] as CSSStyleSheet;
      try {
        const cssRules = styleSheet.cssRules;
        if (cssRules) {
          for (let j = 0; j < cssRules.length; j++) {
            const rule = cssRules[j];
            if (rule instanceof CSSMediaRule) {
              // Check if it's a media rule
              mediaQueryStyles.push(rule.cssText);
            }
          }
        }
      } catch (error) {
        console.error('Error accessing CSS rules:', error);
      }
    }
    return mediaQueryStyles.join('\n');
  }
}
