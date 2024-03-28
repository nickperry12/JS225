// Behold this incomplete class for constructing boxed banners.

// Complete this class so that the test cases shown below work as intended. You
// are free to add any properties you need.

// You may assume that the input will always fit in your terminal window.

class Banner {
  constructor(message = '') {
    this.message = message;
    this.length = message.length === 0 ? 4 : message.length + 4;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    let chars = [];

    for(let i = 0; i < this.length; i += 1) {
      if (i === 0 || i === this.length - 1) chars.push('+');
      else chars.push('-');
    }

    return chars.join('');
  }

  emptyLine() {
    let chars = [];

    for (let i = 0; i < this.length; i += 1) {
      if (i === 0 || i === this.length - 1) chars.push('|');
      else chars.push(' ');
    }

    return chars.join('');
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+