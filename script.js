let count=0, totalCells = document.querySelectorAll(".cell"), 
indexRan = Math.floor(Math.random() * 401) + 1,
i, row,col;
row=parseInt(indexRan/20);
col=parseInt(indexRan%20);
console.log(indexRan);
// console.log(totalCells);<div class="done"></div>
for (i = 0; i < totalCells.length; i++) {
    (function (index) {
        document.querySelectorAll(".cell")[index].addEventListener(
            "click",
            function () {
                // console.log(i);
                ++count;
                let rowM= parseInt(index/20), colM=parseInt(index%20);
                let divjs = document.createElement("div");
                divjs.classList.add("done");
                document.querySelectorAll(".cell")[index].appendChild(divjs); 
                if (index==indexRan) {
                    alert(`You won the game with ${count} attempts`);
                    divjs.classList.remove("done");
                    divjs.classList.add("gold");
                    
                } else {
                    if(row==rowM)
                    {
                        if (col>colM) {
                            alert("Move right");
                        }
                        else
                        alert("Move Left");

                    }
                    else if(col==colM)
                    {
                        if (row>rowM) {
                            alert("Move down");
                        }
                        else
                        alert("Move up");
                    }
                    else
                    {
                        if(row>rowM && col>colM)
                            alert("Move down and right");
                        else if(row>rowM && col<colM)
                            alert("Move down and left");
                        else if(row<rowM && col<colM)
                            alert("Move up and left");
                        else
                        alert("Move up and right");
                    }
                }
            }
        );
    })(i); 
}
