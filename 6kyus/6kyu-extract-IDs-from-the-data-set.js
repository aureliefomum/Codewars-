// 6KYU CODEWARS - EXTRACT THE IDS FROM THE DATASET 
// INSTRUCTIONS: 
// Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

// var data = {
//   id: 1,
//   items: [
//     {id: 2},
//     {id: 3, items: [
//       {id: 4},
//       {id: 5}
//     ]}
//   ]
// }

// extractIds(data) // should return [1,2,3,4,5]
 //SOLUTIONS:
//1)
function extractIds(data){
  return [].concat(...Object.keys(data).map(function (element) {
      return element === 'id' ? data[element] : extractIds(data[element]);
    }))
}

//2)
function extractIds(data, ids = []){
  let search = (item) => {
    for(var key in item){
      if(key == 'id')
        ids.push(item[key]);
      if(typeof item[key] === 'object')
        search(item[key]);      
    }
  };
  return search(data), ids;
}