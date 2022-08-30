function selectionSort(arr) {
  let sortedArr =[];
  for (i=0; i<arr.length-1; i++){
    let refIndex=i;
    for (x=i+1; x<arr.length; x++){
      if (arr[x]<arr[refIndex]){
        refIndex=x;
      }
        [arr[i], arr[refIndex]]=[arr[refIndex], arr[i]];
    }
  }
  return arr
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-3, -1, 3, 5]");
  console.log("=>", selectionSort([5, 3, -1, -3]));

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime

  let startTime =  new Date().getTime();
 
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    selectionSort([3, -1, 5, 2]);
    longInput.push(Math.random());
  }
  let curTime = new Date().getTime();
  console.log("AVG RUN: ", curTime-startTime, "LONG INPUT: ", longInput)
}

module.exports = selectionSort;

// I am assuming we are not allowed to the the .sort() method even though it is not explicitly stated. I am going to compare the first index each other index and see if it is less than the index. if it is I will push it to the beginning index and then use that as the referance index to see if any others are lesser. It will essentially be a looping comparison for which index is lesser than the current index 0, constatly replacing index 0 with lesser number via the loop. 
