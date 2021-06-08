class House {
  recite() {
    const lines = [];
    for (let i = 1; i <= this.data().length; ++i) {
      lines.push(this.line(i));
    }
    return lines.join('\n');
  }

  line(number) {
    return `This is ${this.data().slice(-number).join(' ')}.\n`;
  }

  data() {
    return [
      'the horse and the hound and the horn that belonged to',
      'the farmer sowing his corn that kept',
      'the rooster that crowed in the morn that woke',
      'the priest all shaven and shorn that married',
      'the man all tattered and torn that kissed',
      'the maiden all forlorn that milked',
      'the cow with the crumpled horn that tossed',
      'the dog that worried',
      'the cat that killed',
      'the rat that ate',
      'the malt that lay in',
      'the house that Jack built',
    ];
  }
}

module.exports = {
  House,
}
