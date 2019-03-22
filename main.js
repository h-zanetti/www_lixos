
var piece = {type : null, design : null, color : null, image : null};
var designs = {
    shirt : ['Simples', 'Gola V', 'Polo'],
    hoodie : ['Longsleeve', 'Hoodie'],
    cap : ['Five Panel', 'Trucker', 'Chapéu', 'Gorro']
}

var photo = document.getElementById('photo');
var type = document.getElementById('type');
var design = document.getElementById('design');
var color = document.getElementById('color');
var image = document.getElementById('image');
var art = document.getElementById('art')

function chooseType(type) {
    design.classList.remove('d-none');
    // Different types of pieces have different kinds of design
    // So the btn-group must be different depending on the kind of piece the user is creating
    var btnGroup = document.getElementById('design-btn-group');
    var designBtn = document.getElementById('design-btn');
    while (btnGroup.hasChildNodes()) {
        btnGroup.removeChild(btnGroup.firstChild);

    }
    for (k in designs){
        if (type == k) {
            for (i=0; i<designs[k].length; i++) {
                var designBtnClone = designBtn.cloneNode(true);
                btnGroup.appendChild(designBtnClone);
                designBtnClone.classList.remove('d-none');
                designBtnClone.innerHTML = designs[k][i];
                designBtnClone.value = designs[k][i];
            }
        }
    }

    piece.type = type;
    if (type=='shirt'){
        photo.src = 'images/shirt/Simples/black.png';
    } else if (type=='cap') {
        photo.src = 'images/cap/Five Panel/blue.png';
    } else {
        photo.src = 'images/hoodie//Hoodie/blue.png';
    }
}

function chooseDesign(design) {
    piece.design = design;
    color.classList.remove('d-none');
    source = 'images/'+ piece.type +'/'+ design +'/'+ 'black.png';
    photo.src = source;
}

function chooseColor(color) { 
    piece.color = color;
    source = 'images/'+ piece.type +'/'+ piece.design +'/'+ color +'.png';
    photo.src = source;
    image.classList.remove('d-none');
    
}

var artSizeRange = document.getElementById("formControlRange1");
artSizeRange.addEventListener("input", (e) => {
    var artSize = artSizeRange.value;
    art.style.width = artSize+'px';
})

var artXRange = document.getElementById("formControlRange3");
artXRange.addEventListener("input", (e) => {
    var artX = artXRange.value;
    art.style.bottom = artX+'px';
})

var artYRange = document.getElementById("formControlRange2");
artYRange.addEventListener("input", (e) => {
    var artY = artYRange.value;
    art.style.left = artY+'px';
})