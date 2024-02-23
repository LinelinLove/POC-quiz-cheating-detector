export class ShortcutInhibitor {
  constructor() {
    this.prohibitedCharacters = "abcdefghijklmnopqrstuvwxyz";
  }

  /**
   * To prevent the user from using main shortcuts
   * "ntw" can't be override on the browser
   * @param {*} e
   */
  handleKeyDown(e) {
    if (
      ((e.ctrlKey || e.metaKey) &&
        this.prohibitedCharacters.lastIndexOf(e.key) !== -1) ||
      this.prohibitedCharacters.toUpperCase().lastIndexOf(e.key) !== -1
    ) {
      e.preventDefault();
      e.stopPropagation(); // for refresh
      console.log("Shortcut is prohibited");
    }
  }

  handleContextMenu(e) {
    e.preventDefault();
  }

  /**
   * To prevent the user to use the drag and drop with input and textarea
   */
  disableDragAndDropOnInputs() {
    const inputTextElements = document.querySelectorAll('input[type="text"]');
    const textareaElements = document.querySelectorAll("textarea");

    inputTextElements.forEach((input) => {
      input.setAttribute("ondrag", "return false");
      input.setAttribute("ondrop", "return false");
    });

    textareaElements.forEach((textarea) => {
      textarea.setAttribute("ondrag", "return false");
      textarea.setAttribute("ondrop", "return false");
    });
  }

  /**
   * Init the shortcut inhibitor
   */
  initialize() {
    document.addEventListener("keydown", (e) => this.handleKeyDown(e));
    document.addEventListener("contextmenu", (e) => this.handleContextMenu(e));
    this.disableDragAndDropOnInputs();
  }
}

// Example
const inhibitor = new shortcutInhibitor();
inhibitor.initialize();
