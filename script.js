function verifyAge() {
  //dans la variable age je récupére du champ
  var age = document.querySelector('#age').value;
  //si les champ sont remplie et si l'utilisateur a bien remplie avec des chiffre
  if (age && !isNaN(age)){
    if (age >= 18){
      //si l'utilisateur à plus de 18ans affiche majeur , si l'utilisateur a moins de 18ans affiche mineur
      alert("Vous êtes majeur");
    }else{
      alert("Vous êtes mineur");
    }
  }
}
//je vérifie si l'utilisateur appuie sur le bouton validé si c'est le cas j'apelle ma fonction age
document.getElementById('submit').onclick = function(){verifyAge()}
