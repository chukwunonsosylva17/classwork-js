class Hubly {
    constructor(name, location){ 
        this.name = name;
        this.location= location;
        this.boardMembers = []; 
    }
    getName () { 
        console.log(this.name);
        return this.name
    }
    getLocation() { 
        console.log(this.location);
        return this.location
    } 
    setName(name) {
        this.name = name;
    } 
    setLocation(location) { 
        this.location = location; 
    }

    createBoardMembers(name, position) {
        const newMember={name:name, position:position}
        this.boardMembers.push(newMember)
    }

    readBoardMembers() {
        return this.boardMembers
    }
    
    findBoardMembers(search){
      const found = this.boardMembers.findIndex(x => {
        return x.name === search || x.position === search
      })
      return found
       
    }

    updateBoardMembers(search, newName, newPosition) {
       const found =  this.findBoardMembers(search)
        const newObject = {newName, newPosition}
        this.boardMembers[found] = newObject
        return null
    }

    remove(search) {
        let index = this.boardMembers.findIndex(x => x.name === search || x.position === search);
        if (index > -1) {
          return this.boardMembers.splice(index, 1);
        } 
        return 'not found';
    }
    filter(search) {
        let filtered =  this.boardMembers.filter(x => x.position !== search);
        this.boardMembers = filtered
        return "filtered"
    }
    class extends Genesys {
        constructor (name)
    }
}
const hubly = new Hubly("Sir Kelly", "Centenary city")
console.log(hubly)
hubly.getName()
hubly.getLocation()
 