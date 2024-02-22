class TabFocusTracking {
  userHasLeftTheTab = false;

  constructor(tagToChangeSelector) {
    this.setWindowBlurListener(tagToChangeSelector);
  }

  /**
   * Sets up the listener for unfocusing the tab
   * @param {string} selector selector of the tag to change
   */
  setWindowBlurListener(selector) {
    window.addEventListener("blur", () => {
      this.changeTemplate(selector);
    });
  }

  /**
   * Changes the HTML of the element chosen
   * @param {string} selector selector of the tag to change
   */
  changeTemplate(selector) {
    document.querySelector(selector).textContent = "TRICHEUR";
    this.userHasLeftTheTab = true;
  }
}

const tabFocusTrack = new TabFocusTracking("h1");
