function drawChristmasTree() {
  const height = parseInt(prompt("Введіть висоту ялинки:"));

  switch (height) {
    case 0:
      alert("Висота повинна бути позитивним числом.");
      break;
    case 1:
      alert("Висота занадто маленька.");
      break;
    default:
      alert("Приємних свят! Ось ваша ялинка:");

    
      const treeDiv = document.getElementById("tree");

      
      for (let i = 1; i <= height; i++) {
        let row = "";
        
        for (let j = 1; j <= height - i; j++) {
          row += "&nbsp;";
        }
        
        for (let k = 1; k <= 2 * i - 1; k++) {
          row += "*";
        }
        treeDiv.innerHTML += row + "<br>";
      }
      
      for (let i = 1; i <= height / 3; i++) {
        let row = "";
        for (let j = 1; j <= height - 2; j++) {
          row += "&nbsp;";
        }
        row += "||";
        treeDiv.innerHTML += row + "<br>";
      }
  }
}

drawChristmasTree();
