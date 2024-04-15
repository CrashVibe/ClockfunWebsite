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
        icon.href = '/static/img/icon_dark.svg'; // 白天模式图标
        console.log("[DEBUG] 已替换为白天模式显示图标 (内容为黑)")
    } else {
        icon.href = '/static/img/icon.svg'; // 夜间模式图标
        console.log("[DEBUG] 已替换为夜间模式显示图标 (内容为白)")
    }
}
 
window.addEventListener('load', toggleIcon);
matchMedia('(prefers-color-scheme)').addEventListener('change', toggleIcon);
