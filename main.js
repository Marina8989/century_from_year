//The first century spans from the year 1 up to and including 100.
//The second - from the year 101 up to including the year 200, etc.
//Task: given a year, return the century it is in.
// centuryFromYear(1705)  return (18)
// centuryFromYear(1900)  return (19)
// centuryFromYear(1601)  return (17)
// centuryFromYear(2000)  return (20)

function centuryFromYear(year) {
  let century = Math.floor(year / 100);
  let decade = year % 100;
  if (decade > 0) {
    return century + 1;
  }
  return century;
}
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2006));
console.log(centuryFromYear(1601));
