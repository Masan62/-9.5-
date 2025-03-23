function nameGenerator() {
    return {
      names: ['Zara', 'Kai', 'Milo', 'Luna', 'Ezra', 'Nora', 'Leo', 'Isla', 'Finn', 'Aria'],
      randomName: 'Click the button!',
      generateName() {
        const index = Math.floor(Math.random() * this.names.length);
        this.randomName = this.names[index];
      }
    }
  }
  