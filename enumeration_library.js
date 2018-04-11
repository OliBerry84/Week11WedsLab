const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find = function(callback) {
  let foundItem = undefined;
    this.array.forEach(item => {
      if (foundItem === undefined && callback(item)){
          foundItem = item
        };
    });
    return foundItem;
  };

// EnumerationLibrary.prototype.find = function(callback) {
//   let foundItem = undefined;
//   for (const item of this.array){
//       if (callback(item)){
//         return foundItem = item;
//     }
//   };
// };

EnumerationLibrary.prototype.map = function(callback) {
    const mapArray = [];
    this.array.forEach(item => {
      mapArray.push(callback(item));
    });
    return mapArray;
};

// EnumerationLibrary.prototype.map = function(callback) {
//   const mapArray = [];
//   for(const item of this.array){
//       mapArray.push(callback(item));
//   }
//   return mapArray;
// }

EnumerationLibrary.prototype.filter = function(callback) {
  const filteredArray = [];
  this.array.forEach(item => {
    if(callback(item) != undefined){
          filteredArray.push(item);
        }
  });
  return filteredArray;
};

// EnumerationLibrary.prototype.filter = function(callback) {
//   const filteredArray = [];
//   for(const item of this.array){
//     if(callback(item) != undefined){
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// }
EnumerationLibrary.prototype.some = function(callback) {
  let ifFound = false;
    this.array.forEach(item =>{
      if(callback(item)){
            ifFound = true;
          };
    });
    return ifFound;
};

// EnumerationLibrary.prototype.some = function(callback) {
//   for(const item of this.array){
//     if(callback(item)){
//       return true;
//     }
//   }
//   return false;
// }

EnumerationLibrary.prototype.every = function(callback) {
  let ifFound = true;
  this.array.forEach(item =>{
    if(!callback(item)){
          ifFound = false;
        };
  });
return ifFound;
};

// EnumerationLibrary.prototype.every = function(callback) {
//   for(const item of this.array){
//     if(!callback(item)){
//       return false;
//     };
//   };
//   return true;
// };


module.exports = EnumerationLibrary;
