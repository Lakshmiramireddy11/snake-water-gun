 alert(`Hey! lets play snake,water,gun game`);
alert(`let's start the game`);
alert(`pick your choice`)
const choices=['snake','water','gun'];
 const randomIndex=Math.floor(Math.random()*3);
 const computerChoice=choices[randomIndex];
const gameImages=document.getElementById('game-images')
const snake=document.getElementById('sanke')
const water=document.getElementById('water')
const gun=document.getElementById('gun')
snake.addEventListener('click',function(){
  if(computerChoice==='water'){
    alert("computerChoice:"+computerChoice)
    alert('you won the game')
  }
  if(computerChoice==='gun'){
    alert("computerChoice:"+computerChoice)
    alert('you lose the game')
  }
  if(computerChoice==='snake'){
    alert("computerChoice:"+computerChoice)
    alert('its a tie')
  }

})
water.addEventListener('click',function(){
  if(computerChoice==='snake'){
    alert("computerChoice:"+computerChoice)
    alert('you lose the game')
  }
  if(computerChoice==='gun'){
    alert("computerChoice:"+computerChoice)
    alert('you won the game')
  }
  if(computerChoice==='water'){
    alert("computerChoice:"+computerChoice)
    alert('its a tie')
  }

})
gun.addEventListener('click',function(){
  if(computerChoice==='snake'){
    alert("computerChoice:"+computerChoice)
    alert('you won the game')
  }
  if(computerChoice==='gun'){
    alert("computerChoice:"+computerChoice)
    alert('its a tie')
  }
  if(computerChoice==='water'){
    alert("computerChoice:"+computerChoice)
    alert('you  lose the game')
  }

})