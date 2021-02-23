

 let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let com = [".com"]
  let itirar=[pronoun,adj,noun,com];
var valorfinal="";
  for(let i=0;i<itirar.length;i++){

    valorfinal=valorfinal+ itirar[i][       Math.floor(Math.random() * itirar[i].length)  ];      
    
  };

console.log(     valorfinal        );