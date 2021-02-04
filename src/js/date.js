export default function findDay(userDate) {
  userDate = userDate.getDay();
  if (userDate === 0) {
    return "Sunday";
  }
  else if (userDate === 1){
    return "Monday";
  }
  else if (userDate === 2){
    return "Tuesday";
  }
  else if (userDate === 3){
    return "Wednesday";
  }
  else if (userDate === 4){
    return "Thursday";
  }
  else if (userDate === 5){
    return "Friday";
  }
  else if (userDate === 6){
    return "Saturday";
  }
  else {
    return "Entry is not a date";
  }
};