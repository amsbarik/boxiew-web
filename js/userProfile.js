

// user profile js start
function showDetail(){
    document.getElementById("show-detail").style.display = "initial";
    }

    function closeDetail(){
    document.getElementById("show-detail").style.display = "none";
    }

    function showProfile(){
    document.getElementById("profile-nav").style.display = "initial";
    }

    function hideProfile(){
        let window_width = window.innerWidth;
        if (window_width <= 576) document.getElementById("profile-nav").style.display = "none";
        else document.getElementById("profile-nav").style.display = "initial";
    }

    // function hideProfile(){
    //     document.getElementById("profile-nav").style.display = "none";
    //     }
    

    // window.onresize.apply(updateBackground);

    // function updateBackground(){
    //     let window_width = window.innerWidth;
    //     if (window_width >= 576) document.getElementById("to-modify").classList.remove("background1").add("background2");
    //     else document.getElementById("to-modify").classList.remove("background2").add("background1");
    // }


    
    
    // user profile js end
