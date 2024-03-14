let me = {
  firstName: 'Nick',
  lastName: 'Perry'
};

let wife = {
  firstName: 'Rylea',
  lastName: 'Perry'
};

let brother = {
  firstName: 'Vinny',
  lastName: 'Perry'
}

let friend = {
  firstName: 'Blake',
  lastName: 'Tabian'
}

let people = {
  collection: [me, wife, brother],

  lastIndexUsed: function() {
    return this.collection.length - 1;
  },

  fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall() {
    this.collection.forEach(this.fullName);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    })

    return index
  },

  add: function add(person) {
    if (this.isInvalidPerson(person)) return;
  
    this.collection.push(person)
  },

  remove: function remove(person) {
    let index = this.getIndex(person);
  
    if (this.isInvalidPerson(person)) return;
    if (index === -1) return;
  
    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson) return;
  
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
}

me.occupation = 'Software Engineer';
console.log(people.collection);