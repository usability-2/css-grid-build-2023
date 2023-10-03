let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    document.querySelector('.top-nav').classList.toggle('show');
    let expanded = this.getAttribute('aria-expanded') == 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});