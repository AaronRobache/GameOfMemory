//Jeux de paires 
  var card = document.getElementsByTagName("img");
  var img = ["elizabeth.png", "hassanaf.png", "kiyohimeaf.png", "oda.png", "attila.png", "saber.png", "scathachaf.png", "elizabeth.png", "hassanaf.png", "kiyohimeaf.png", "oda.png", "attila.png", "saber.png", "scathachaf.png"];
  var result = [];

  for(let i=0; i<img.length; i++) {
    card[i].addEventListener("click", function(){
      card[i].src = "img/" + img[i]
      card[i].alt = img[i]
      result.push(img[i])
      if(result.length === 2) {
        setTimeout(compare, 500)
        setTimeout(function(){result = []}, 501)
      }
    }); 
  }

  function compare() {
    if(result[0] !== result[1]) {
      for(let y=0; y<card.length; y++) {
        if(result[0] === card[y].alt || result[1] === card[y].alt) {
         card[y].src = "img/RulerCard.png"
         card[y].alt = ""
        }
      }  
    }
  }
