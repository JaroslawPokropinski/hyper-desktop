const {
  SetWindowPos,
  HWND_BOTTOM,
  HWND_TOPMOST,
  SWP_NOACTIVATE,
  SWP_NOSIZE,
  SWP_NOMOVE
} = require('win-setwindowpos');

exports.onWindow = win => {
  const hwnd = win.getNativeWindowHandle();
  win.setMinimizable(false);
  win.setMaximizable(false);
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
  win.on('show', function() {
    setBottom();
  });
  win.on('focus', function() {
    setBottom();
  });
};
