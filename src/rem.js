const pxTorem = () => {
  let windowwidth = document.documentElement.clientWidth
  if (windowwidth >= 600) {
    windowwidth = 375
  }
  document.documentElement.style.fontSize = windowwidth / 750 * 100 + 'px'
}
pxTorem()
window.onresize = function () {
  pxTorem()
}
