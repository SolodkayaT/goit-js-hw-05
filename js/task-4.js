class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    const result = this._value + str;
    this._value = result;
  }

  prepend(str) {
    const result = str + this._value;
    this._value = result;
  }

  pad(str) {
    const result = str + this._value + str;
    this._value = result;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='
