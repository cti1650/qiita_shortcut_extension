let injectScript = (file, node) => {
  var s, th;
  th = document.getElementsByTagName(node)[0];
  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return th.appendChild(s);
};

injectScript(chrome.extension.getURL('/js/shortcut.js'), 'body');
injectScript(chrome.extension.getURL('/js/embeded.js'), 'body');
