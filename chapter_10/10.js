// 별 찍기

// 입력 5
// 출력
//       *
//      ***
//     *****
//    *******
//   *********

for(let i = 0; i < 5; i++)  {
    for(let j=4; j > i; j--)  {
      // space
      document.write('&nbsp');
    }
    for(let j=0; j <= i; j++)  {
      document.write('*');
    }
    for(let j=1; j <= i; j++)  {
      document.write('*');
    }
    document.write('<br>');
}