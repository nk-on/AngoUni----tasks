function convert(minute) {
  const result = minute / 60;
  return result;
}
function mealTime() {
  const time = prompt("Enter meal time");
  const [hour, minute] = time.split(":");
  const [formatedHour, formatedMinute] = [parseInt(hour), parseInt(minute)];
  if (formatedHour < 0 || formatedHour > 23) {
    alert("enter valid date");
    return;
  }
  if (formatedMinute < 0 || formatedHour > 59) {
    alert("enter valid date");
    return;
  }
  const result = formatedHour + convert(formatedMinute);
  if (result >= 7 && result <= 8) {
    return "Breakfast";
  } else if (result >= 12 && result <= 13) {
    return "Lunch";
  } else if (result >= 18 && result <= 19) {
    return "Supper";
  } else {
    return "";
  }
}
mealTime();
