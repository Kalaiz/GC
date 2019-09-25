function swapStyleSheet2(sheet,img,img2){            
        document.getElementById('stylesheet').setAttribute('href', sheet);
        document.getElementById('stylesheet2').setAttribute('href', sheet);
        document.getElementById('theme').src= img ;
        document.getElementById('mini').src= img2 ;
}



