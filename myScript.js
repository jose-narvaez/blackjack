
var options = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K','A',2,3,4,5,6,7,8,9,10,'J','Q','K','A',2,3,4,5,6,7,8,9,10,'J','Q','K','A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
var optionsValues = [1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10];
var suitsList = ['♥','♥','♥','♥','♥','♥','♥','♥','♥','♥','♥','♥','♥','♠','♠','♠','♠','♠','♠','♠','♠','♠','♠','♠','♠','♠','♦','♦','♦','♦','♦','♦','♦','♦','♦','♦','♦','♦','♦','♣','♣','♣','♣','♣','♣','♣','♣','♣','♣','♣','♣','♣'];

var classContainerC = [];
var classContainerN = [];
var classContainerS = [];
var opclassContainerC = [];
var opclassContainerN = [];
var cpuclassContainerC = [];
var cpuclassContainerN = [];
var attributeContainer = [];
var myResultList=[];
var yourResultList=[];

classContainerC = document.querySelectorAll('.startingC');
classContainerN = document.querySelectorAll('.startingN');
classContainerS = document.querySelectorAll('.suit');
opclassContainerC = document.querySelectorAll('.optionalC');
opclassContainerN = document.querySelectorAll('.optionalN');
cpuclassContainerC = document.querySelectorAll('.cpuC');
cpuclassContainerN = document.querySelectorAll('.cpuN');


var myResult = 0;
var yourResult = 0;
var l = 0;
var m = 0;
var u = 7;
var y = 2;

function startMyGame(){

      i=1;
      n=2;
      p=0;

      while (i < 3){
        var randomNum = Math.random();
        var wholeNum = Math.floor(randomNum * optionsValues.length);

        classContainerS[i+4].innerHTML = suitsList[wholeNum];

        if (suitsList[wholeNum]=='♥' || suitsList[wholeNum]== '♦'){
          classContainerS[i+4].style.color = 'red';
        }

        classContainerN[n].innerHTML = options[wholeNum];
        classContainerN[n+1].innerHTML = options[wholeNum];

        classContainerC[i].style.background = 'white';

        if (optionsValues[wholeNum]==1 && myResult<11){
          var numb = 11;
          myResultList.push(numb);
        }
        else{
          var numb = optionsValues[wholeNum];
          myResultList.push(numb);
        }

        while(p < myResultList.length){
          myResult = myResult + myResultList[p];
          p++;
        }

        i++;
        n++;
        n++;
        suitsList.splice(wholeNum,1);
        options.splice(wholeNum,1);
        optionsValues.splice(wholeNum,1);
      }
      document.getElementById('scoreBox').innerHTML = myResult;
      if(myResult == 21){
        document.getElementById('message').innerHTML='Blackjack!';
      }
      if(myResult<22){
        document.getElementById('message').innerHTML = 'Come ON!';
      }
      return myResult;
}

function startTheGame(){
        p=0;
        var randomNum = Math.random();
        var wholeNum = Math.floor(randomNum * optionsValues.length);

        classContainerS[0].innerHTML = suitsList[wholeNum];

        if (suitsList[wholeNum]=='♥' || suitsList[wholeNum]== '♦'){
          classContainerS[0].style.color = 'red';
        }

        classContainerN[0].innerHTML = options[wholeNum];
        classContainerN[1].innerHTML = options[wholeNum];

        classContainerC[0].style.background = 'white';

        if (optionsValues[wholeNum]==1){
          var numb = 11;
          yourResultList.push(numb);
        }
        else{
          var numb = optionsValues[wholeNum];
          yourResultList.push(numb);
        }
        while(p < yourResultList.length){
          yourResult = yourResult + yourResultList[p];
          p++;
        }
        suitsList.splice(wholeNum,1);
        options.splice(wholeNum,1);
        optionsValues.splice(wholeNum,1);

        document.getElementById('styleBackCard').innerHTML = "#backCard{ background-image: url(deck.png); background-position: center; background-size: 6.6em 10.6em;}";
        return yourResult;
}

function clickCard(){

  var randomNum = Math.random();
  var wholeNum = Math.floor(randomNum * optionsValues.length);

  classContainerS[u].innerHTML = suitsList[wholeNum];

  if (suitsList[wholeNum]=='♥' || suitsList[wholeNum]== '♦'){
    classContainerS[u].style.color = 'red';
  }

  opclassContainerN[l].innerHTML = options[wholeNum];
  opclassContainerN[l+1].innerHTML = options[wholeNum];

  opclassContainerC[m].style.background = 'white';

  if (optionsValues[wholeNum]==1 && myResult<11){
    var numb = 11;
    myResultList.push(numb);
  }
  else{
    var numb = optionsValues[wholeNum];
    myResultList.push(numb);
  }
  myResult = myResult + myResultList[y];

  while (myResult>21 && myResultList.includes(11)){
    var index = myResultList.indexOf(11);
    myResult = myResult - myResultList[index];
    myResultList[index] = 1;
    myResult = myResult + myResultList[index];
  }
  document.getElementById('scoreBox').innerHTML = myResult;

  if(myResult<22){
    document.getElementById('message').innerHTML='You got THIS!'
  }
  else {
    document.getElementById('message').innerHTML='Sorry! You lost'
  }
  suitsList.splice(wholeNum,1);
  options.splice(wholeNum,1);
  optionsValues.splice(wholeNum,1);

  opclassContainerC[m].removeAttribute("onclick");

  u++;
  l++;
  l++;
  i++;
  m++;
  y++;

}

function endGame(){
  i=0;
  n=0;
  k=1;

  if(myResult<=yourResult){
    var randomNum = Math.random();
    var wholeNum = Math.floor(randomNum * optionsValues.length);

    classContainerS[1].innerHTML = suitsList[wholeNum];

    cpuclassContainerN[0].innerHTML = options[wholeNum];
    cpuclassContainerN[1].innerHTML = options[wholeNum];

    cpuclassContainerC[0].style.background = 'white';

    var numb = optionsValues[wholeNum];
    yourResult = yourResult + numb;

    suitsList.splice(wholeNum,1);
    options.splice(wholeNum,1);
    optionsValues.splice(wholeNum,1);
  }

  while (myResult<22 && yourResult<=myResult ) {
      var randomNum = Math.random();
      var wholeNum = Math.floor(randomNum * optionsValues.length);

      classContainerS[i+1].innerHTML = suitsList[wholeNum];

      if (suitsList[wholeNum]=='♥' || suitsList[wholeNum]== '♦'){
        classContainerS[i+1].style.color = 'red';
      }

      cpuclassContainerN[n].innerHTML = options[wholeNum];
      cpuclassContainerN[n+1].innerHTML = options[wholeNum];

      cpuclassContainerC[i].style.background = 'white';

      if (optionsValues[wholeNum]==1 && yourResult<11){
        var numb = 11;
        yourResultList.push(numb);
      }
      else{
        var numb = optionsValues[wholeNum];
        yourResultList.push(numb);
      }
      yourResult = yourResult + yourResultList[k];

      while (yourResult>21 && yourResultList.includes(11)){
        var index = myResultList.indexOf(11);
        yourResult = yourResult - yourResultList[index];
        yourResultList[index] = 1;
        yourResult = yourResult + yourResultList[index];
      }


      k++;
      i++;
      n++;
      n++;

      suitsList.splice(wholeNum,1);
      options.splice(wholeNum,1);
      optionsValues.splice(wholeNum,1);
    }

    document.getElementById('opponentResult').innerHTML= "Opponent's sum is:  "+ yourResult;

    if(myResult == yourResult){
      document.getElementById('message').innerHTML='It is a tie!';
    }
    else if (myResult>yourResult && myResult<22) {
      document.getElementById('message').innerHTML='You won!';
    }
    else if (myResult<22 && yourResult>=22) {
      document.getElementById('message').innerHTML='You won!';
    }
    else if (yourResult>myResult && yourResult<22) {
      document.getElementById('message').innerHTML='Sorry! You lost';
    }
  }

function restart(){
  window.location.reload(false);
}
