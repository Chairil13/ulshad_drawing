var cursorX, cursorY,
  light = document.getElementById('light');

document.onmousemove = function(e) {
  light.setAttribute("style", "-webkit-filter:brightness(100%)");
  cursorX = e.pageX;
  cursorY = e.pageY;
  light.style.marginLeft = (cursorX - 165) + "px";
  light.style.marginTop = (cursorY - 155) + "px";
}