function clearLinkActive() {
    Array.from(document.querySelectorAll('.nav-item')).map(item => item.querySelector('a').classList.remove('active'))
}
function handleLinkClick(id){
    clearLinkActive()
    const element = document.getElementById(id)
    console.log(element)
    document.getElementById(`link-${id}`).classList.add('active')
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
function handleLinkMapClick(){
    console.log('handleLinkMapClick')
    clearLinkActive()
    document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center'});
}
