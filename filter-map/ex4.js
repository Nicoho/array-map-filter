/* Array.prototype.map ET filter - Exercice 4

Il s'agit d'écrire une fonction getActivitiesMembers qui reçoit deux arguments:
* un tableau représentant des activités artistiques, sportives, etc.
* un deuxième tableau représentant des personnes, et leurs hobbies

Exemple d'argument pour le premier tableau:*/

const act = ['Badminton', 'Tennis', 'Volley-ball', 'Base-ball', 'Soccer', 'Basket-ball', 'Cycling']

//Et pour le deuxième:

const tab = [
  { name: 'Jay Fox', activities: [ 'Badminton' ] },
  { name: 'Jenson Gardner', activities: [ 'Badminton', 'Tennis' ] },
  { name: 'Max Dean', activities: [ 'Base-ball', 'Soccer' ] },
  { name: 'Cody May', activities: [ 'Basket-ball', 'Base-ball' ] },
  { name: 'Nicholas Knight', activities: [ 'Base-ball', 'Volley-ball' ] },
  { name: 'Fletcher Estes', activities: [ 'Basket-ball' ] },
  { name: 'Jaydon Gallagher', activities: [ 'Badminton', 'Basket-ball' ] },
  { name: 'Efrain Rollins', activities: [ 'Volley-ball', 'Tennis' ] },
  { name: 'Tripp Cash', activities: [ 'Badminton' ] },
  { name: 'Ross Howard', activities: [ 'Cycling' ] }
]
/*
La fonction doit renvoyer un tableau d'objets, chacun contenant les propriétés:
* activity: le nom de l'activité
* persons: le nom des pratiquants de cette activité

On peut se servir de map à deux reprises dans cet exercice...

En prenant les deux exemples d'arguments d'entrée, on obtiendrait ceci en sortie:*/

/*const pers = [ {
    activity: 'Badminton',
    persons: [ 'Jay Fox', 'Jenson Gardner', 'Jaydon Gallagher', 'Tripp Cash' ]
  },
  {
    activity: 'Tennis',
    persons: [ 'Jenson Gardner', 'Efrain Rollins' ]
  },
  {
    activity: 'Volley-ball',
    persons: [ 'Nicholas Knight', 'Efrain Rollins' ]
  },
  {
    activity: 'Base-ball',
    persons: [ 'Max Dean', 'Cody May', 'Nicholas Knight' ]
  },
  {
    activity: 'Soccer',
    persons: [ 'Max Dean' ]
  },
  {
    activity: 'Basket-ball',
    persons: [ 'Cody May', 'Fletcher Estes', 'Jaydon Gallagher' ]
  },
  {
    activity: 'Cycling',
    persons: [ 'Ross Howard' ]
  }
]*/



// fonction qui retourne un tableau des pratiquants d'un sport (arr, string) => tableau

const sporty = (arr, str)=> {
  let result =  arr.map(x => x.activities.find(y => y === str)? x.name : undefined).filter(z=>z)
  return result
  
}

// fonction qui crée un objet à partir de sporty
const sport = (arr, str) => {
   return result ={
      activity : str,
      persons : sporty(arr, str)
   }
}


// fonction qui appelle sport sur les elements d'un tableau

function getActivitiesMembers(activities, persons) {
  let result = [];
  for (let i = 0; i<activities.length; i+=1){
    let variab = sport(persons, activities[i])
    console.log(variab);
    result.push(variab);
  }
  return result
}

console.log(getActivitiesMembers(act, tab))


// Ne pas modifier l'export
module.exports = getActivitiesMembers;
