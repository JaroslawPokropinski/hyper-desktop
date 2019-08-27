const {
  SetWindowPos,
  HWND_BOTTOM,
  SWP_NOACTIVATE,
  SWP_NOSIZE,
  SWP_NOMOVE
} = require('win-setwindowpos');
console.log(process.version)
exports.onWindow = win => {
  const hwnd = win.getNativeWindowHandle();
  const setBottom = () => {
    SetWindowPos(
      hwnd,
      HWND_BOTTOM,
      0,
      0,
      0,
      0,
      SWP_NOACTIVATE | SWP_NOSIZE | SWP_NOMOVE
    );
  };
  setBottom();
  win.on('focus', function() {
    setBottom();
  });
};
