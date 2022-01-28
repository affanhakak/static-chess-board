let chessContainer =
  document.getElementById(
    "chessContainer"
  );
let primaryColor = "white";
let secondaryColor = "black";

for (let j = 0; j < 8; j++) {
  if (primaryColor === "white") {
    primaryColor = "black";
    secondaryColor = "white";
  } else {
    primaryColor = "white";
    secondaryColor = "black";
  }
  let row =
    document.createElement("div");
  for (i = 1; i < 9; i++) {
    let box1 =
      document.createElement("div");
    box1.classList.add("box");
    if (i % 2 === 0) {
      box1.style.backgroundColor =
        primaryColor;
    } else {
      box1.style.backgroundColor =
        secondaryColor;
    }
    row.appendChild(box1);
  }
  chessContainer.appendChild(row);
}

//another way of doing this
// for (i = 1; i < 9; i++) {
//     let box2 = document.createElement('div')
//     if (i % 2 === 0) {
//         box2.style.backgroundColor = 'white'
//     }
//     else {
//         box2.style.backgroundColor = 'black'
//     }
//     chessContainer.appendChild(box2)
// }

// for (i = 1; i < 9; i++) {
//     let box3 = document.createElement('div')
//     if (i % 2 === 0) {
//         box3.style.backgroundColor = 'black'
//     }
//     else {
//         box3.style.backgroundColor = 'white'
//     }
//     chessContainer.appendChild(box3)
// }

// for (i = 1; i < 9; i++) {
//     let box4 = document.createElement('div')
//     if (i % 2 === 0) {
//         box4.style.backgroundColor = 'white'
//     }
//     else {
//         box4.style.backgroundColor = 'black'
//     }
//     chessContainer.appendChild(box4)
// }

// for (i = 1; i < 9; i++) {
//     let box5 = document.createElement('div')
//     if (i % 2 === 0) {
//         box5.style.backgroundColor = 'black'
//     }
//     else {
//         box5.style.backgroundColor = 'white'
//     }
//     chessContainer.appendChild(box5)
// }

// for (i = 1; i < 9; i++) {
//     let box6 = document.createElement('div')
//     if (i % 2 === 0) {
//         box6.style.backgroundColor = 'white'
//     }
//     else {
//         box6.style.backgroundColor = 'black'
//     }
//     chessContainer.appendChild(box6)
// }

// for (i = 1; i < 9; i++) {
//     let box7 = document.createElement('div')
//     if (i % 2 === 0) {
//         box7.style.backgroundColor = 'black'
//     }
//     else {
//         box7.style.backgroundColor = 'white'
//     }
//     chessContainer.appendChild(box7)
// }

// for (i = 1; i < 9; i++) {
//     let box8 = document.createElement('div')
//     if (i % 2 === 0) {
//         box8.style.backgroundColor = 'white'
//     }
//     else {
//         box8.style.backgroundColor = 'black'
//     }
//     chessContainer.appendChild(box8)
// }
