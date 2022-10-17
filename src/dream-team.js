const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example*/
  
  // ['Matt', 'Ann', 'Dmitry', 'Max']'ADMM'
  // createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'

function createDreamTeam(str) {
  let name = [];
  let arrName = [];
  let arrNewName = [];
  if(str === null) {
    return false
  }
  if (str === undefined) {
    return false
  }
    for(let i = 0; i < str.length; i++){
      if(typeof str[i] === 'string') {
        name.push(str[i].trim())
      }
    }
    if(name.length === 0) {
      return false
    }
    for(let j = 0; j < name.length; j++){
      arrName.push(name[j][0].toUppercase());
    }
    arrNewName = arrName.sort();
    return arrNewName.join('');
   
}

module.exports = {
  createDreamTeam
};
