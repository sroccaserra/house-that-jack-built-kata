class House {
  line(number) {
    return `This is ${this.data().slice(-number).join(' ')}.\n`;
  }

  data() {
    return [
      "the malt that lay in",
      "the house that Jack built",
    ];
  }
}

module.exports = {
  House,
}
