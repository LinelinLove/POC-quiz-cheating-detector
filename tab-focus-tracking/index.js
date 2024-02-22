export class TabFocusTracking {
  userHasLeftTheTab = false;

  constructor(action) {
    this.setWindowBlurListener(action);
  }

  /**
   * Sets up the listener for unfocusing the tab
   * @param {() => void} action applied on event
   */
  setWindowBlurListener(action) {
    window.addEventListener("blur", () => {
      action();
      this.userHasLeftTheTab = true;
    });
  }
}

// Example
const tabFocusTrack = new TabFocusTracking(() => {
  document.querySelector("h1").textContent = "Triche";
});
