---
tags:
title: tag list code
draft: "true"
date: 2026-07-12
last_updated:
---
1. Ctrl+Shift+I (or Cmd+Option+I) to open the console.
2. Copy/paste `Object.keys(app.metadataCache.getTags()).join(', ')` into the console panel and press Enter.
3. Voilà. A list of tags without using a plugin.

If you want to remove the hash (#) from the start of each tag, use `Object.keys(app.metadataCache.getTags()).map(x => x.slice(1)).join(', ')`

https://forum.obsidian.md/t/hi-everyone-i-want-to-paste-all-my-tags-in-a-note-just-my-tags-as-a-list-dont-want-to-use-the-dataview-plugin-though-any-thoughts-cheers/42016/9