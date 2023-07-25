// home page search box js
let popup = document.getElementById("search-box");
let hideBtn = document.getElementById("show-modal");
let dirBtn = document.getElementById("listing-menu");

function openPopup(){
    popup.classList.add("active");
    hideBtn.classList.add("disable");
    dirBtn.classList.add("disable");
    
}

function closePopup(){
    popup.classList.remove("active");
    hideBtn.classList.remove("disable");
    dirBtn.classList.remove("disable");

}

//shopping page js
let allCgt = document.getElementById("all-category");
// let hideBtn = document.getElementById("show-modal");


function showCtg(){
    allCgt.classList.add("active");
    // hideBtn.classList.add("disable");
    
    // ctg-cls-btn
    
}

function ctgClose(){
    allCgt.classList.remove("active");
    // hideBtn.classList.remove("disable");
    // dirBtn.classList.remove("disable");

}

// single products page js
    let ProductImg = document.getElementById("product-img");
    let SmallImg = document.getElementsByClassName("img-thum");

    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }

    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
    }

    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
    }

    SmallImg[4].onclick = function(){
        ProductImg.src = SmallImg[4].src;
    }