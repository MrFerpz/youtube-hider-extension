# YouTube Suggestion Hider Extension

A Chrome extension that blocks YouTube home page suggestions to help you stay focused.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top right corner
3. Click "Load unpacked" and select this folder
4. The extension will be installed and active

## How it works

- Automatically hides suggestion videos on YouTube's home page
- Shows a message when suggestions are blocked
- Runs continuously to catch dynamically loaded content
- Works on navigation between pages

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that hides suggestions
- `popup.html` - Extension popup interface

## Testing

To test the extension:
1. Install it following the steps above
2. Navigate to youtube.com
3. You should see suggestions are hidden and a message appears
4. The extension icon will show a popup confirming it's active