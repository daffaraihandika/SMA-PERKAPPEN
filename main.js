var tablinks = document.getElementsByClassName("tab-link")
var tabcontents = document.getElementsByClassName("tab-content")

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("link-active");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("content-active");
    }

    event.currentTarget.classList.add("link-active");
    document.getElementById(tabname).classList.add("content-active");
}