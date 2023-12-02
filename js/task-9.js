/**
  *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
  *? розгорнути масив,
  *? вирізати foo,
  *? перевести його в рядок розділений пробілами
  */

  const arr = ['BEST', 'the', 'foo', 'is', 'JS' ];

  const arr2 = arr.reverse();
  arr2.splice(2,1);
  //console.log(arr2)
  const arr3 = arr2.join(' ');
console.log(arr3)