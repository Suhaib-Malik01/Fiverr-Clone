let left = 1;
  let right = 5;
  function show() {
    for (let i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }

  function moveLeft() {
    if (left <= 5 && right <= 9) {
      document.getElementById("c" + left).style.display = "none";
      left ++;
      right ++;

      for (let i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = " inline-block";
      }
    } else return;

    console.log("hello");
  }

  function moveRight() {
    if (left >= 4 && right >= 8) {
      document.getElementById("c" + right).style.display = "none";
      left -= 1;
      right -= 1;

      for (let i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = " inline-block";
      }
    } else return;

    console.log("world");
  }
