// Hide Loading Box (Preloader)
function handlePreloader() {
    document.querySelector('#preloader').style.display = 'none';
}
window.addEventListener('load', (event) => {
    handlePreloader();
});
function toggleSideBar(){
    let selector = document.querySelector('#filter-sidebar-nav');
    if(selector.classList.contains('-right-72')){
        window.setTimeout(function () {
            selector.classList.remove('-right-72')
            selector.classList.add('right-0')
        }, 450);
        return;
    }

    window.setTimeout(function () {
        selector.classList.remove('right-0')
		selector.classList.add('-right-72')
	}, 450);

}
document.addEventListener('click', function (event) {
	if (!event.target.closest('#filter-sidebar-nav')) return;
    let selector = document.querySelector('#filter-sidebar-nav')
    window.setTimeout(function () {
        selector.classList.remove('right-0')
		selector.classList.add('-right-72')
	}, 450);
}, false);
