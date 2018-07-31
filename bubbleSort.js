
// bubble sort

module.exports = function bubbleSort(items) {
  console.log('');
  console.log('items', items);
var length = items.length;
  console.log('length', length);
for (var i = 0; i < length; i++) {
  //Number of passes
  for (var j = 0; j < (length - i - 1); j++) {
      console.log('');
      console.log('i index is '+ i);
      console.log('i item is', items[i]);
      console.log('j length-i-1 is ', length-i-1);
      console.log('j index is '+ j);
      console.log('j item is', items[j]);
      console.log('j+1 item is', items[j+1]);
      //Notice that j < (length - i)
      //Compare the adjacent positions
if(items[j] > items[j+1]) {
  console.log('');
        console.log('items[j]', items[j], ' > items[j+1]', items[j+1]);
        //Swap the numbers
  var tmp = items[j];
        console.log('store in temp', tmp);
        //Temporary variable to hold the current number
  items[j] = items[j+1];
        console.log('make items[j] = items[j+1]', items[j]);
        //Replace current number with adjacent number
  items[j+1] = tmp;
        console.log('put items[j+1] = tmp', items[j+1]);
        console.log('items after switch', items);
        //Replace adjacent number with current number
}
}
}
  console.log('items end',items);
return items;
}

// bubbleSort([4,2,3,1]);
