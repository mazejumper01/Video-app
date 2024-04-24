window.addEventListener("load", function (){
    let videoList = document.querySelectorAll(".video-list a");
    let video = document.querySelector(".video-player video");

    video.setAttribute("src", videoList[0].href);
    video.setAttribute("poster", videoList[0].querySelector("img").src);
    
    videoList.forEach(function(element){
        
        element.addEventListener("click", function(event){
            event.preventDefault();
            video.setAttribute("src", element.href);
            let img = element.querySelector("img").src;
            video.setAttribute("poster", img);
            
            video.addEventListener("canplay", function(){
                video.play();
            })

        })
    });

});
