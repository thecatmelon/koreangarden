---
title: Anki Card Design
---
- I am using Anki strictly for vocabulary building
- Cards do not show English by default (inspired by [Fluent Forever](https://bookshop.org/p/books/fluent-forever-revised-edition-how-to-learn-any-language-fast-and-never-forget-it-gabriel-wyner/b3c835af26a96de2?ean=9780593797495&next=t))
	- Any translations are hidden by default on the card's back using HTML `<details>` element (see below for code). I view translations when necessary
- Cards have a hint hidden on the card front (again, using HTML `<details>` element) if I require some help/context. Hint is a contextual sentence
	- This was mostly added for homonyms. Idea: seeing the context around the word can help differentiate which "version" of the word the card was made for
- A single Anki note makes three cards:
	- **Passive**: Korean -> Image
	- **Active**: Image -> Korean
	- **Context**: a sentence using the target word
	- [for info on passive vs active vocabulary](https://www.geeksforgeeks.org/english/difference-between-active-and-passive-vocabulary/)
- How I click the buttons (I liked [this reddit comment](https://www.reddit.com/r/Anki/comments/17pe5pe/comment/k84qm2h/)):
	- **Easy**: answered correctly with no hesitation
	- **Good**: answered correctly with a little bit of hesitation
	- **Hard**: answer was partially correct and/or hesitated a lot
	- **Again**: answer was completely incorrect

## Note Contents

NOTE: I really wanted to have 3 cards automatically made with one Anki note (for ease). But it wasn't possible to make multiple cards if I made my Korean note based off a cloze card. As a result, this note is based off the Basic note type, and each "part" of a cloze field was separated so I could still type and check against specific things. I kept getting errors using regular cloze syntax with the Basic card type, so did it this way just to avoid seeing errors (didn't think it was smart to YOLO with errors as future updates might break my cards).
### Fields

![[Pasted image 20260619132635.png]]

### Card styling

```
body {
background: linear-gradient(180deg, #ffd3e2, #a8ffc3 100%);
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #382a3c;
padding: 15px;
min-height: 100vh;
}

.card-content {
text-align: center;
border: 2px solid #382a3c;
box-shadow: 0px 6px 0 0 #382a3c;
border-radius: 1rem;
padding: 15px;
background-color: #f4f4f4;
}

details {
margin: 40px 15px 15px 15px;
background-color: lightgrey;
padding: 10px;
border-radius: 0.5rem;
}

.context {
margin-top: 20px;
font-size: 0.8rem;
} 

.type {
margin-top: 20px;
}

img {
max-width: 80%;
}
```

## Card Types

### Passive

#### Card code
##### Front
```
<div class="card-content">
<h1>{{Korean}}</h1>
{{Audio}}
<details>
<summary>
문맥 ?
</summary>
<div class="context">
{{Full context sentence}}
</div>
</details>
</div>
```

##### Back
```
<div class="card-content">
<h1>{{Korean}}</h1>
{{Audio}}
<div class="image">{{Image}}</div>
<details>
<summary>
번역 ?
</summary>
<div class="context">
{{English}}
</div>
</details>
</div>
```

### Active
- Answer needs to be typed in to review spelling as well (incorrect spelling = click "hard")
#### Card code

##### Front
```
<div class="card-content">
{{Image}}
<div class="type">{{type:Korean}}</div>
<details>
<summary>
문맥 ?
</summary>
<div class="context">
{{Cloze context sentence}}
</div>
</details>
</div>
```

##### Back
```
<div class="card-content">
{{Image}}
<div class="type">{{type:Korean}}</div>
<h1>{{Korean}}</h1>
{{Audio}}
<details>
<summary>
번역 ?
</summary>
<div class="context">
{{English}}
</div>
</details>
</div>
```

### Context
- This card is also meant to passively review knowledge of grammar structures
	- ex: if target word is a verb, context sentence can be conjugated in different verb tenses. Since I have to type in the word, I am reviewing proper conjugation/spelling.
#### Card code

##### Front

```
<div class="card-content">
<h4>{{Cloze context sentence}}</h4>
<div class="type">{{type:cloze}}</type>
<details>
<summary>
문맥 ?
</summary>
<div class="context">
{{Image}}
</div>
</details>
</div>
```

##### Back
```
<div class="card-content">
<h4>{{Cloze context sentence}}</h4>
<div class="type">{{type:cloze}}</type>
<h4>{{Full context sentence}}</h4>
<div>{{Context Audio}}</div>
<div>{{Image}}</div>
<details>
<summary>
번역 ?
</summary>
<div class="context">
{{Context Translation}}
</div>
</details>
</div>
```