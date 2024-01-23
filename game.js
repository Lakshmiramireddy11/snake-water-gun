alert(`Hey! lets play snake,water,gun game`);
alert(`let's start the game`);
const choices=['snake','water','gun'];
const rounds=4;
for(let currRound=1;currRound<=rounds;currRound++){
   let randomIndex=Math.floor(Math.random()*3);
   const computerChoice=choices[randomIndex];
   let userChoice=prompt("Enter your choice:")
   alert("computerChoice="+computerChoice);
   if(
     (userChoice=='snake'&&computerChoice=='water')||
     (userChoice=='water'&&computerChoice=='gun')||
     (userChoice=='gun'&&computerChoice=='snake')
   ){
     alert("You win!");
   }
   else if(
    (computerChoice=='snake'&&userChoice=='water')||
    (computerChoice=='water'&&userChoice=='gun')||
    (computerChoice=='gun'&&userChoice=='snake')
   ){
    alert("oops! you lose the game.");
   }
   else{
      alert("It's a tie");
   }
}
