
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('./sw.js', { scope: './' })})}