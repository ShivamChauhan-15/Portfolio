function changeCard(a) {
    Array.from(document.querySelectorAll(".subcon")).forEach(e => e.style.zIndex=0);
    document.getElementById(a).style.zIndex=1;
}