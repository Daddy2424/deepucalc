let calculation = '';


function display(value){
  document.getElementById('result').value += value;
}

function calculate(){
  let displayBoxResult = document.getElementById('result').value;
  let totalResult = eval(displayBoxResult);
  document.getElementById('result').value = totalResult;
}

function clearScreen(){
  document.getElementById('result').value = '';
}
