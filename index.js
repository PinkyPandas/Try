const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

    var timer;
    var timeRemaining;
    var lives;
    var selectedTile;
    var selectedNum;
    var disableSelect;

    window.onload = function(){
        //Run startgame function when the button is clicked.
        id("create-game").addEventListener("click",startGame);
    }

    function id(id){
        return document.getElementById(id);
    }

    function startGame(){
        //Choose board Difficulty
        let board;
        if(id("diff-1").checked) board=easy[0];
        else if(id("diff-2").checked) board=medium[0];
        else board=hard[0];
        //Set lives to three and enable selecting numbers and tiles.
        lives=3;
        disableSelect=false; //for pausing once th game ends
        id("lives").textContent="Lives Remaining :" + lives;
        generateBoard(board);
    }

    function generateBoard(board) {
        //first remove the previous board so that orads do not stack over each other
        clearPrevious();
    }

    function clearPrevious(){
        //removes the entire board
        let tiles=qsa(".tile");
        for(let i=0;i<tiles.length();i++){
            tiles[i].remove();
        }
        //resets the timer
        if(timer) clearTimeout(timer);//The clearTimeout() method clears a timer set with the setTimeout() method.
        //deselcts any number selected from the number container
        for(let i=0;i<id("number-container").children.length;i++){//The children property returns a collection of an element's child elements.
        //The children property returns an HTMLCollection object.
            id("number-container").children[i].classList.remove("selected"); // ‘selectedIndex’ is the predefined method that will return the value of the index which is selected by the user.
        }
            //now we remove any selected tile and number
            selectedTile=null;
            selectedNum=null;
    }

    function qs(selector){
        return document.querySelector(selector); // this method returns the first element that methces the css selector
    }

    function qsa(selector){
        return document.querySelectorAll(selector); //this method returns array of all elements that methces the css selector
    }