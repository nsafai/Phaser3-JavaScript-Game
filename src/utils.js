const printList = (list) => {
  let output = [];

  for (let n in list) {
    output += list[n] + ' ';
  }

  console.log(output);
}

const print2DLists = (list) => {
  for (let i in list) {
    if (Array.isArray(list[i])) {
      // item at index list[i] is an array
      printList(list[i]);
    } else {
      // item at index list[i] is not an array, print it
      console.log(list[i])
    }
  }
}

const printZeroGrid = (width, height) => {
  let zero = '0 ';
  for (let i = 0; i < height; i += 1) {
    console.log(zero.repeat(width));
  }
}

export { printList, print2DLists, printZeroGrid };