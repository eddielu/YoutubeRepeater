#  YoutubeRepeater
Chrome Extension to watch Youtube on repeat

### Current system:
1. content script -> msg -> to background page -> opens page action
2. page action -> port <-> content script

### Current issues:
1. pageAction has no feedback
2. Streamline communication
3. Look over code/Handle corner cases
4. Remove console logs/warnings/errors
5. ~~pageAction does not load~~
6. ~~jquery not loading~~
