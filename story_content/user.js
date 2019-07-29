function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IX5utTSYYi":
        Script1();
        break;
      case "6CMBj4nmFPE":
        Script2();
        break;
      case "68453sJCjAl":
        Script3();
        break;
      case "5Wz4q1SuJSe":
        Script4();
        break;
      case "6OlWUDhnK1S":
        Script5();
        break;
  }
}

function Script1()
{
  var randomnumber = Math.floor((Math.random()*4)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

function Script2()
{
  var randomnumber1 = Math.floor((Math.random()*4)-2);
var randomnumber2 = Math.floor((Math.random()*4)-2);
var randomnumber3 = Math.floor((Math.random()*4)-2);
var player = GetPlayer();
player.SetVar("randnum1",randomnumber1)
player.SetVar("randnum2",randomnumber2)
player.SetVar("randnum3",randomnumber3)
}

function Script3()
{
  var randomnumber1 = Math.floor((Math.random()*4)-2);
var randomnumber2 = Math.floor((Math.random()*4)-2);
var randomnumber3 = Math.floor((Math.random()*4)-2);
var player = GetPlayer();
player.SetVar("randnum1",randomnumber1)
player.SetVar("randnum2",randomnumber2)
player.SetVar("randnum3",randomnumber3)
}

function Script4()
{
  var randomnumber1 = Math.floor((Math.random()*4)-2);
var randomnumber2 = Math.floor((Math.random()*4)-2);
var randomnumber3 = Math.floor((Math.random()*4)-2);
var player = GetPlayer();
player.SetVar("randnum1",randomnumber1)
player.SetVar("randnum2",randomnumber2)
player.SetVar("randnum3",randomnumber3)
}

function Script5()
{
  var randomnumber1 = Math.floor((Math.random()*4)-2);
var randomnumber2 = Math.floor((Math.random()*4)-2);
var randomnumber3 = Math.floor((Math.random()*4)-2);
var player = GetPlayer();
player.SetVar("randnum1",randomnumber1)
player.SetVar("randnum2",randomnumber2)
player.SetVar("randnum3",randomnumber3)
}

