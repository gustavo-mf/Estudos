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