- I am using Anki strictly for vocabulary building
- A single Anki note makes three cards:
	- **Passive**: Korean -> Image
	- **Active**: Image -> Korean
	- **Context**: a sentence using the target word
	- [for info on passive vs active vocabulary](https://www.geeksforgeeks.org/english/difference-between-active-and-passive-vocabulary/)
- Cards use minimal English (inspired by Fluent Forever)
	- Any translations are hidden by default on the card's back using HTML `<details>` element (see below for code)

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