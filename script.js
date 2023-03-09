const a = [
    'red',
    'dark_red',
    'dark_dark_red',
    'green',
    'dark_green',
    'dark_dark_green',
    'blue',
    'dark_blue',
    'dark_dark_blue'
  ];
  
  const nthItems = (array, n) => {
    const results = [];
    const addItem = index => {
      if (index < array.length) {
        results.push(array[index]);
        addItem(index + n);
      }
    };
    addItem(0);
    return results;
  };
  
  console.log(nthItems(a, 2));
  console.log(nthItems(a, 3));