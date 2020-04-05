function onlyNumbers(keyinput){
  
  var input=keyinput.charCode? keyinput.charCode : keyinput.keyCode
  // если не цифра и удаление
  if ((input != 8) && (input != 46)) {
  if ((input < 48) || (input > 57)) {
  return false;
  }
  }
  }
  

  function mySavings()
  {
  // обнуляй эррор
  document.getElementById('balanceError').innerHTML = '';
  document.getElementById('rateError').innerHTML = '';
  document.getElementById('yearsError').innerHTML = '';
  
  // проверка валидности
  if ((document.savingscalc.balance.value == null) || (document.savingscalc.balance.value.length == 0) || (isNaN(document.savingscalc.balance.value) == true))
  {
  document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
  document.getElementById('balanceError').innerHTML = 'Numeric value required. Example: 10000';
  } else if ((document.savingscalc.rate.value == null) || (document.savingscalc.rate.value.length == 0) || (isNaN(document.savingscalc.rate.value) == true))
  {
  document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
  document.getElementById('rateError').innerHTML = 'Numeric value required. Example: 3.5';
  } else if ((document.savingscalc.years.value == null) || (document.savingscalc.years.value.length == 0) || (isNaN(document.savingscalc.years.value) == true))
  {
  document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
  document.getElementById('yearsError').innerHTML = 'Numeric value required. Example: 10';
  } else
  {
  // задать переменные данных
  let startingbalance = document.savingscalc.balance.value;
  let interestrate = document.savingscalc.rate.value / 100;
  let totalyears = document.savingscalc.years.value;
  // let totalmonths = document.savingscalc.years.value * 12;
  let compoundsperyear = 12;
  
  // калькуляция и выдача баланса
  document.getElementById('finalBalance').innerHTML = 'Final Balance: $' + (startingbalance*Math.pow((1+interestrate/compoundsperyear),(compoundsperyear*totalyears))).toFixed(2);
  }
  
  // A = P(1 + r%/n)^nt
  // startingbalance*Math.pow((1+interestrate/compoundsperyear),(compoundsperyear*totalyears))
  
  }
  
  function mySavingsReset()
  {
  // ресет всех полей
  document.getElementById('finalBalance').innerHTML = 'Values reset';
  document.getElementById('balanceError').innerHTML = '';
  document.getElementById('rateError').innerHTML = '';
  document.getElementById('yearsError').innerHTML = '';
  document.savingscalc.balance.value = null;
  document.savingscalc.rate.value = null;
  document.savingscalc.years.value = null;
  }