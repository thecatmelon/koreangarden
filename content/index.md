---
title: 멜라의 한국어 디지털 정원
---
안녕하세요!

This is my Korean digital garden where I log my work done in self-learning the Korean language.

## What the stuff in the menu means

### Anki Cards
The notes my Anki cards are based off of, sorted by tags.
### Notes
All my grammar/theory/cultural notes I've compiled over the years.
### Resources
A list of all the resources that I have used or am planning to use at some point in my Korean learning journey
### Misc
Other bits of information that are more tangentially related to my language learning

<script>
function randomCard() {
fetch("https://koreangarden.thecatmelon.com/sitemap.xml")
        .then((response) => response.text())
        .then((xmlString) => {
            const parser = new DOMParser();
            const xmlDoc = parser.
                parseFromString(xmlString, "text/xml");
            const tutorials = xmlDoc.
                querySelectorAll("url");
                const random = Math.floor(Math.random() * tutorials.length);
                const randomURL = tutorials[random].querySelector("loc").textContent;
                console.log(randomURL);
                open(randomURL, '_self');
        });
    }
    </script>
<input type="button" value="random card" onclick="randomCard();"/>