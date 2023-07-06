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

var btnSidebars = document.getElementsByClassName("btn-sidebar")
var contents = document.getElementsByClassName("content")

function openTabs(tabname){
    for(tablink of btnSidebars){
        tablink.classList.remove("btn-active");
    }

    for(tabcontent of contents){
        tabcontent.classList.remove("content-informasi-active");
    }

    event.currentTarget.classList.add("btn-active");
    document.getElementById(tabname).classList.add("content-informasi-active");
}