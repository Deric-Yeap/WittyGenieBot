//Adding event listeners
document.getElementById("fontsize").addEventListener("change", changefontsize);
document.getElementById("fontfamily").addEventListener("change", changefontfamily);
document.getElementById("footerbutton").addEventListener("click", openfooter);
document.getElementById("sidebarbutton").addEventListener("click", opensidebar);
document.getElementById("content").addEventListener("click", togglenavbars)
const themes = document.getElementsByName("theme");
for (var theme of themes){
    theme.addEventListener("click", changetheme);
}


//scrolling listener
var oldScrollY = window.scrollY;
window.onscroll = function(e) {
    if(oldScrollY >= window.scrollY){
        document.getElementById("footerbutton").className = document.getElementById("footerbutton").className.replace("d-none","d-grid");
        document.getElementById("sidebarbutton").className = document.getElementById("sidebarbutton").className.replace("d-none","d-flex");
    }
    else{
        document.getElementById("footerbutton").className = document.getElementById("footerbutton").className.replace("d-grid","d-none");
        document.getElementById("footer").className = document.getElementById("footer").className.replace("d-flex","d-none");
        document.getElementById("sidebarbutton").className = document.getElementById("sidebarbutton").className.replace("d-flex","d-none");
        document.getElementById("sidebar").className = document.getElementById("sidebar").className.replace("d-block","d-none");
    }
    oldScrollY = window.scrollY;
}
var currentchapter = ""

//Load contents from txt
async function loadcontent(){
    let num_of_files = 
    for (var i=1; i<18; i++){
        
        await fetch(`Let Me Game In Peace/Let Me Game In Peace ${i}.txt`)
        .then(response => response.text())
        .then(text => {
            document.getElementById("content").innerHTML += text
      
        })
    }
    
    for (var ele of document.getElementsByTagName("h3")){
        var node = document.createElement("a");
        node.setAttribute("href", "#" + ele.id);
        node.setAttribute("id", ele.id + "f")
        // node.setAttribute("class", "list-group-item");
        node.appendChild(document.createTextNode(ele.textContent));
        document.getElementById("sidebar").appendChild(node);
    }

    var read = new Set();
    
    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                console.log(entry.target)
                read.add(entry.target.innerText)
                var target = document.querySelector(`a[href='#${entry.target.id}']`);
                target.style.opacity = "0.6";
                console.log(target);
                currentchapter = entry.target.id + "f";
                document.getElementById("currentchapter").innerText = entry.target.innerText
                console.log(entry.target.innerText)
            }
        });
    }; 
    
    let observer = new IntersectionObserver(callback);
    
    let targets = document.getElementsByTagName("h3");

    for (var target of targets){
        observer.observe(target);
    }

}
loadcontent();


/////////
//Settings
function changefontsize(event){
    console.log(event.target.value);
    var size = 18 + parseInt(event.target.value);
    console.log(size)
    document.body.style.fontSize = "calc(" + size + "px + 0.6vw)"
    console.log(document.body.style.fontSize);
}
function changefontfamily(event){
    document.body.style.fontFamily = event.target.value;
}
function changetheme(event){
    var value = event.target.value.split(";");
    document.body.style.backgroundColor = value[0];
    document.body.style.color = value[1];
}
function openfooter(){
    document.getElementById("footerbutton").className = document.getElementById("footerbutton").className.replace("d-grid","d-none");
    document.getElementById("footer").className = document.getElementById("footer").className.replace("d-none", "d-flex");
    // setTimeout(() => {
    //     document.getElementById("content").addEventListener("click", unclick)
    // }, 100);
}

function togglenavbars(){//toggle buttons
    if (document.getElementById("footerbutton").className.includes("d-grid")){
        document.getElementById("footerbutton").className = document.getElementById("footerbutton").className.replace("d-grid","d-none");
    }
    else{
        document.getElementById("footerbutton").className = document.getElementById("footerbutton").className.replace("d-none", "d-grid");
    }
    if (document.getElementById("sidebarbutton").className.includes("d-flex")){
        document.getElementById("sidebarbutton").className = document.getElementById("sidebarbutton").className.replace("d-flex","d-none");
    }
    else{
        document.getElementById("sidebarbutton").className = document.getElementById("sidebarbutton").className.replace("d-none","d-flex");
    }

    document.getElementById("footer").className = document.getElementById("footer").className.replace("d-flex","d-none");
    document.getElementById("sidebar").className = document.getElementById("sidebar").className.replace("d-block","d-none");
    
}

function opensidebar(){
    document.getElementById("sidebarbutton").className = document.getElementById("sidebarbutton").className.replace("d-flex","d-none");
    document.getElementById("sidebar").className = document.getElementById("sidebar").className.replace("d-none", "d-block");
    console.log(currentchapter)
    window.location.hash = currentchapter;
    // setTimeout(() => {
    //     document.getElementById("content").addEventListener("click", unclick)
    // }, 100);
}

