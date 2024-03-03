class Notion {
    constructor() {
      this.entries = [];
    }
  
    addEntry(title, content) {
      const newEntry = { title, content, timestamp: new Date() };
      this.entries.push(newEntry);
      console.log(`New entry added: ${title}`);
    }
  
    removeEntry(title) {
      const index = this.entries.findIndex(entry => entry.title === title);
      if (index !== -1) {
        this.entries.splice(index, 1);
        console.log(`Entry removed: ${title}`);
      } else {
        console.log(`Entry not found: ${title}`);
      }
    }
  
    displayEntries() {
      console.log('Notion Entries:');
      this.entries.forEach(entry => {
        console.log(`${entry.title} - ${entry.content} (Created on: ${entry.timestamp})`);
      });
    }
  }
  
  // Example usage
  const myNotion = new Notion();
  
  myNotion.addEntry('Meeting Notes', 'Discussion on project updates.');
  myNotion.addEntry('Book List', 'Books to read in 2022.');
  
  myNotion.displayEntries();
  
  myNotion.removeEntry('Book List');
  
  myNotion.displayEntries();
  