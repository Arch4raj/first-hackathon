async function getpokemon(){
    let pokecount=50;
    for(var i=1;i<=pokecount;i++){
       await pokemon(i);
    }
}



async function pokemon(id){
    try{
      var response  =await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      var pokemon=await response.json();
      console.log(pokemon);
      var poke=document.createElement("div")
      poke.setAttribute("class","pokemon")
      var division=document.createElement("div")
      division.setAttribute("class","content")
      division.innerHTML=` 
      <img class="pokeimg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png " alt="pokemon">
      <div class="info">
      <p><span>id&nbsp:&nbsp</span><span>${pokemon.id}</span></p>
      <p><span>name&nbsp:&nbsp</span><span>${pokemon.name}</span></p>
      <p><span>ability&nbsp:&nbsp</span><span>${pokemon.abilities[0].ability.name}</span></p>
      <p><span>moves&nbsp:&nbsp</span><span>${pokemon.moves[0].move.name}</span></p>
      <p><span>weight&nbsp:&nbsp</span><span>${pokemon.weight}</span></p></div>`
    
    document.body.append(poke,division)
    
    }
    catch(error){
      console.log("error")
    }
  
}

getpokemon();