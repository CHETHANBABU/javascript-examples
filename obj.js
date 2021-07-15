let chethan = {
    name: 'Chethan',
    tech: 'JS',
    year: 1993, 
    calcAge: function (bYear) {
        return 2019 - bYear;
    },
    otherCalcAge: function () {
        return 2019 - this.year;
    },
    newAge: function () {
      return this.age = 2019 - this.year;   
    }
}
console.log('--------------',chethan.calcAge(1993));
console.log('+++++++++++++++', chethan.otherCalcAge());
console.log('=================', chethan);
// -------------------------Object comparision --------------------------------------------
var jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var callMeJango = jangoFett;

// Outputs: false
console.log('%%%%%%%%%%%%%%%%%%', bobaFett === jangoFett);

// Outputs: true
console.log('#################', callMeJango === jangoFett);