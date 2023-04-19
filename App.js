const HandleSubmit = () => {
  var now = new Date();
  var currentday = now.getDate();
  var currentmonth = now.getMonth() + 1;
  var currentyear = now.getFullYear();
  var date = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);
  da = document.getElementById('day');
  mo = document.getElementById('month');
  ye = document.getElementById('year');
  d = Math.abs(currentday - date);
  m = Math.abs(currentmonth - month);
  y = Math.abs(currentyear - year);
  document.getElementById('dif-day').innerHTML = d;
  document.getElementById('dif-month').innerHTML = m;
  document.getElementById('dif-year').innerHTML = y;
  len_day = da.value.length;
  len_month = mo.value.length;
  len_year = ye.value.length;

  if (len_day == 0) {
    document.getElementById('pa').innerHTML = "This feild is required";
    document.getElementById('daylabel').style.color = "hsl(0, 100%, 67%)";
    document.getElementById('day').style.border = "1px solid hsl(0, 100%, 67%)";
    document.getElementById('dif-day').innerHTML = "--";
    document.getElementById('dif-month').innerHTML = "--";
    document.getElementById('dif-year').innerHTML = "--";
    document.getElementById('pa').style.display = "block";
  }
  else {
    if (date > 32) {
      document.getElementById('pa').innerHTML = "Must be a valid date";
      document.getElementById('daylabel').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('dif-day').innerHTML = "--";
      document.getElementById('dif-month').innerHTML = "--";
      document.getElementById('dif-year').innerHTML = "--";
      document.getElementById('pa').style.display = "block";
    }
    else {
      document.getElementById('pa').style.display = "none";
      document.getElementById('daylabel').style.color = "hsl(0, 1%, 44%)";
      document.getElementById('day').style.border = "1px solid black";
    }
  }
  if (len_month == 0) {
    document.getElementById('month-pa').innerHTML = "This feild is required";
    document.getElementById('monthlabel').style.color = "hsl(0, 100%, 67%)";
    document.getElementById('month').style.border = "1px solid hsl(0, 100%, 67%)";
    document.getElementById('dif-day').innerHTML = "--";
    document.getElementById('dif-month').innerHTML = "--";
    document.getElementById('dif-year').innerHTML = "--";
    document.getElementById('month-pa').style.display = "block";
  }
  else {
    if (month > 12) {
      document.getElementById('month-pa').innerHTML = "Must be a valid date";
      document.getElementById('monthlabel').style.color = "hsl(0, 100%, 67%)";
      document.getElementById('dif-day').innerHTML = "--";
      document.getElementById('dif-month').innerHTML = "--";
      document.getElementById('dif-year').innerHTML = "--";
      document.getElementById('month-pa').style.display = "block";
    }
    else {
      document.getElementById('month-pa').style.display = "none";
      document.getElementById('monthlabel').style.color = "hsl(0, 1%, 44%)";
      document.getElementById('month').style.border = "1px solid black";
    }
  }
  if (len_year == 0) {
    document.getElementById('year-pa').innerHTML = "This feild is required";
    document.getElementById('yearlabel').style.color = "hsl(0, 100%, 67%)";
    document.getElementById('year').style.border = "1px solid hsl(0, 100%, 67%)";
    document.getElementById('dif-day').innerHTML = "--";
    document.getElementById('dif-month').innerHTML = "--";
    document.getElementById('dif-year').innerHTML = "--";
    document.getElementById('year-pa').style.display = "block";
  }
  else {
    if (currentyear < year) {
      document.getElementById('year-pa').innerHTML = "Must be a valid past";
      document.getElementById('dif-year').innerHTML = "--";
      document.getElementById('dif-month').innerHTML = "--";
      document.getElementById('dif-day').innerHTML = "--";
      document.getElementById('yearlabel').style.color = "red";
      document.getElementById('year-pa').style.display = "block";
      document.getElementById('year').style.border = "1px solid red";
    }
    else {
      document.getElementById('year-pa').style.display = "none";
      document.getElementById('yearlabel').style.color = "hsl(0, 1%, 44%)";
      document.getElementById('year').style.border = "1px solid black";
    }
  }

}