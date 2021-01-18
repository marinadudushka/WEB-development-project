function openTab(tabID) {

    let tab = document.getElementById(tabID);

    tab.style.display = "block";

    let name = "close-button " + tabID;
    let span = document.getElementsByClassName(name)[0];

    span.onclick=function()
    {
        tab.style.display="none";
    }
}