setInterval(function () {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')
    
    next.setAttribute('data-show', '')
  }, 2000)

function toggleIcon() {
    var icon = document.querySelector('link[rel~="icon"]');
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        icon.href = '/static/img/icon.svg'; // 白天模式图标
    } else {
        icon.href = '/static/img/icon_dark.svg'; // 夜间模式图标
    }
    var logo = document.querySelector('img[class~="logo"]');
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        logo.href = '/static/img/icon.svg';
    } else {
        logo.href = '/static/img/icon_dark.svg';
    }
}
 
window.addEventListener('load', toggleIcon);
matchMedia('(prefers-color-scheme)').addEventListener('change', toggleIcon);
