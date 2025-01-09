
# Browser extension to convert text into emojis

Browser extension runs in chrome.
 
## Getting Started
1. Install the necessary dependencies:
    ```bash
    npm install 
    ```

1. Build the project:
    ```bash
    npm run build 
    ```

1. Add the extension to your browser. To do this, go to `chrome://extensions/`, enable developer mode (top right), and click "Load unpacked". Select the `build` directory from the dialog which appears and click "Select Folder".

1. That's it! You should now be able to open the extension's popup and see text on the page converted into emojis.

## Generating Emojis
Emojis are stored in `src/utils/clean_emoji.json`. There is a clean_emoji.js script you can edit if you need to generate a different json format.

`node clean_emoji.js` -> outputs to `clean_emoji.json`

## Editing the template

We recommend running `npm run dev` while editing the template as it will rebuild the project when changes are made. 
