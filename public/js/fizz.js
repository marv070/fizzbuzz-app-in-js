  function fizzbuzz() {
      var num = document.getElementById("choice").value;
        if (num % 15 == 0)
          alert(num+ " IS " + "MinedMinds!!");
        else if (num % 3 == 0)
          alert(num+ " IS " + "Mined!!");
        else if (num % 5 == 0)
          alert(num+ " IS " + "Minds!!");
        else
          alert("Sorry"+" " + num + "" + " is just " + num); 
    } 

function showanswer() {
  var num  = 1;
    while (num < 100)
    {
        if (num % 15 == 0) { document.write ("MinedMinds"); 
        }
        else if (num % 5 == 0) { document.write ("Minds"); 
        }
        else if (num % 3 == 0) { document.write ("Mined");
        }
        else{ document.write (num);
        }
        document.write ("<br>");
        num += 1;
    }
}
  