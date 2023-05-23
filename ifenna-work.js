class Hubly {
    constructor(location){ 
        this.name = "Hubly";
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
    
}
class Genesys extends Hubly {
    constructor (name,location){
        super(location) // parent 
        this.name = name
        this.boardMembers = []
        this.description = ""
    }   
readName () {
    return this.name 
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
    getparentboardMembers() {
        console.log(this.boardMembers);
        return this.boardMembers;
    } 
    createStaff(name, position) {
        const newMember={name:name, position:position}
        this.staff.push(newMember)
    }
    getStaff() { 
    console.log(this.name)
    return this.name;
    }
    readStaff() {
        return this.staff
    }
    
    findStaff(search){
      const found = this.staff.findIndex(x => {
        return x.name === search || x.position === search
      })
      return found
       
    }

    updateStaff(search, newName, newPosition) {
       const found =  this.Staff(search)
        const newObject = {newName, newPosition}
        this.Staff[found] = newObject
        return null
    }

    remove(search) {
        let index = this.Staff.findIndex(x => x.name === search || x.position === search);
        if (index > -1) {
          return this.Staff.splice(index, 1);
        } 
        return 'not found';
}
}
class Tenece extends Hubly {
    constructor (name, location){
        super(name, location); 
        this.boardMembers = "";
        this.description = "";
    }    getName () { 
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
    getboardMembers() {
        console.log(this.boardMembers);
        return this.boardMembers
    } 
    createStaff(name, position) {
        const newMember={name:name, position:position}
        this.staff.push(newMember)
    }
    getStaff() { 
    console.log(this.name)
    return this.name;
    }
    readStaff() {
        return this.staff
    }
    
    findStaff(search){
      const found = this.staff.findIndex(x => {
        return x.name === search || x.position === search
      })
      return found
       
    } 

    updateStaff(search, newName, newPosition) {
       const found =  this.Staff(search)
        const newObject = {newName, newPosition}
        this.Staff[found] = newObject
        return null
    }

    remove(search) {
        let index = this.Staff.findIndex(x => x.name === search || x.position === search);
        if (index > -1) {
          return this.Staff.splice(index, 1);
        } 
        return 'not found';
    }
}
class Workers extends Hubly{ 
    constructor () {
        this.wokers = { 
        board_members: this.hublyBoardMemebrs,
        GenesysStaff: [], TeneceStaff: [] };
    }  
    getWorkers() { 
        return this.wokers;
    }
}
const hubly = new Hubly("Sir Kelly", "Centenary city");
console.log(hubly);
hubly.getName();
hubly.getLocation();
 

const genesys = new Genesys ();
console.log(genesys);
genesys.getLocation();
genesys.getName();
genesys.createStaff();
genesys.description();

const tenece = new Tenece ();
console.log(tenece);
tenece.getName();
tenece.getLocation();
tenece.createStaff();
tenece.description();

const workers = new Workers ();
console.log(workers);