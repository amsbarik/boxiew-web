// nav bottom
$(document).ready(function(){ 

    $('.nav-link-sm').on("click", function(){

    $('.nav-link-sm').removeClass('active');

    $(this).addClass('active');
    });
});


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

    // qty plus & minus
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    let x = 1;

    plus.addEventListener("click", ()=>{
        if(x < 10){
            x++;
            num.innerHTML = x;
        //console.log("x");
        }
    })

    minus.addEventListener("click", ()=>{
        if(x > 1){
            x--;
            //x = (x < 10)? "0" + x : x;
            num.innerHTML = x;
        }
        
    })


    // listing page js start
    function openFilter(){
    document.getElementById("filter-right").style.display = "initial";
    }

    function closeFilter(){
    document.getElementById("filter-right").style.display = "none";
    }
    // listing page js end
 
    