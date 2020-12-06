/**Dice Number: Number of time we rolled
 * 2,           4   dice + dice2; What's the percentage number of times this was rolled
 * 3,           15  dice + dice2; What's the percentage number of times this was rolled
 * 4,           31  dice + dice2; What's the percentage number of times this was rolled
 * 5,           15  dice + dice2; What's the percentage number of times this was rolled
 * 6,           55  dice + dice2; What's the percentage number of times this was rolled
 * 7,           100 dice + dice2; What's the percentage number of times this was rolled
 * 8,           40  dice + dice2; What's the percentage number of times this was rolled
 * 9,           32  dice + dice2; What's the percentage number of times this was rolled
 * 10,          23  dice + dice2; What's the percentage number of times this was rolled
 * 11,          10  dice + dice2; What's the percentage number of times this was rolled
 * 12,          5   dice + dice2; What's the percentage number of times this was rolled
 *  ----------------------------------------------------------
 *              (100)Total number / index(100) .04
 * 1) Roll die one and roll die 2
 * 2) Add Die one to Die 2
 * 3) Display all numbers and their roll
 * 4) All dice total/each dice number
 */

function roll_dice() {
  const rolling = 100000;
  console.log("Start rolling ....");
  let rolled_numbers = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  };
  for (let i = 1; i <= rolling; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    const single_rolled_number = dice1 + dice2;
    for (var property in rolled_numbers) {
      if (rolled_numbers.hasOwnProperty(property)) {
        if (property == single_rolled_number) {
          rolled_numbers[property]++;
        }
      }
    }
  }

  console.log(rolled_numbers);
  // How to order objects by property values
  var sortable = [];
  for (var game_roll in rolled_numbers) {
    sortable.push([game_roll, rolled_numbers[game_roll]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });

  for (let v = sortable.length - 1; v >= 0; v--) {
    console.log(sortable[v]);
  }
  
}
