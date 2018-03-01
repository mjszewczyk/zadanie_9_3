var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

var newText = text.replace('Velociraptor', dinosaur);
var size = newText.length / 2;
var begin = newText.substr(0, size);

alert(begin);
console.log(begin);
