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
      // alert("before");
      var num = 1;
      while (num < 101) {
          if (num % 15 == 0) {
              document.getElementById('answerhere').innerHTML += '<p>MinedMinds</p>'
          } else if (num % 5 == 0) {
              document.getElementById('answerhere').innerHTML += "<p>Minds</p>";
          } else if (num % 3 == 0) {
              document.getElementById('answerhere').innerHTML += "<p>Mined</p>";
          } else {
              document.getElementById('answerhere').innerHTML += '<p>' + num + '</p>';
          }
          num += 1;
          // alert("after");
      }
  }
