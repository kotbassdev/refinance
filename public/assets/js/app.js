function clearLinkActive() {
    Array.from(document.querySelectorAll('.nav-item')).map(item => item.querySelector('a').classList.remove('active'))
}
function handleNavbarMenuClick(id){
    clearLinkActive();
    const element = document.getElementById(id);
    document.getElementById(`link-${id}`).classList.add('active');
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
function handleLinkMapClick(){
    console.log('handleLinkMapClick');
    clearLinkActive();
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center'});
}
function handleBtnHamburgerClick(){
    document.querySelector(".navbar-mobile").classList.toggle('active');
}
function handleMobileNavbarMenuClick(id){
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    document.querySelector('.navbar-mobile').classList.remove('active');
}

window.addEventListener("scroll",() => document.querySelector('.btn-uptotop').style.display = window.pageYOffset > 1000 ? 'block' : 'none')
window.addEventListener("scroll",() => document.querySelector('.btn-to-bottom').style.display = window.pageYOffset < 1000 ? 'block' : 'none')