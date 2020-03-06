//Coding challenge - 1
var markHeight = 1.54, markMass = 74;
var johnHeight = 1.74, johnMass = 92;

var markBMI = markMass / Math.pow(markHeight, 2);
var johnBMI = johnMass / Math.pow(johnHeight, 2);

console.log('Is Mark\'s BMI higher than John\'s?' + (markBMI > johnBMI));

console.log('markBMI', markBMI);
console.log('johnBMI', johnBMI);

//Coding challenge - 2
var johnTeam = [ 89, 120, 103], 
 markTeam = [ 116, 94, 123],  
 maryTeam = [ 97, 134, 105];

var johnTeamAverage = (johnTeam[0] + johnTeam[1] + johnTeam[2]) / 3,
 markTeamAverage = (markTeam[0] + markTeam[1] + markTeam[2]) / 3,
 maryTeamAverage = (maryTeam[0] + maryTeam[1] + maryTeam[2]) / 3;

console.log('John: ', johnTeamAverage,'Mark: ',markTeamAverage, 'Mary: ', maryTeamAverage);

if(johnTeamAverage > markTeamAverage && johnTeamAverage > maryTeamAverage)
  console.log('John\'s team is the winner ', johnTeamAverage);
else if(markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage) 
  console.log('Mark\'s team is the winner ', markTeamAverage);
else
  console.log('Mary\' team is the winner ', markTeamAverage);

//Coding challenge - 3
function tipCalculator(bill) {
  if(bill < 50) return bill * 0.2;
  else if(bill >= 50 && bill <= 200) return bill * 0.15;
  else return bill * 0.10;
}

var i, tip, tips = [], bills = [124, 48, 268], finalBills = [];

for(i = 0; i < 3; i++) {
  tip = tipCalculator(bills[i]);
  tips.push(tip);
  finalBills.push(bills[i] + tip);
  console.log('bill: ' + bills[i] + ' tip: ' + tip + ' final bill: ' + finalBills[i]);
}

//Coding challenge - 4
var mark = {
  name: 'Mark',
  mass: 92,
  height: 1.74,
  BMI: 0,
  calcBMI: function() {
    this.BMI = this.mass / Math.pow(this.height, 2);
  },
  toString: function() {
    return 'Name: ' + this.name 
    + ' height: ' + this.height 
    + ' mass: ' + this.mass 
    + ' BMI: ' + this.BMI;
  }
};

var john = {
  name: 'John',
  mass: 61,
  height: 1.54,
  BMI: 0,
  calcBMI: function() {
    this.BMI = this.mass / Math.pow(this.height, 2);
  },
  toString: function() {
    return 'Name: ' + this.name 
    + ' height: ' + this.height 
    + ' mass: ' + this.mass 
    + ' BMI: ' + this.BMI;
  }
};

mark.calcBMI();
john.calcBMI();

if(mark.BMI > john.BMI)  
  console.log(mark.toString());
else
  console.log(john.toString());