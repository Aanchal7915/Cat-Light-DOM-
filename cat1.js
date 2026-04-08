//https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png
//https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png

function offCat(){
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("offSwitch").style.backgroundColor="grey";
    document.getElementById("onSwitch").style.backgroundColor="green";
    document.getElementById("switchTitle").textContent="Switched Off";
}


function onCat(){
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("offSwitch").style.backgroundColor="red";
    document.getElementById("onSwitch").style.backgroundColor="grey";
    document.getElementById("switchTitle").textContent="Switched On";
}