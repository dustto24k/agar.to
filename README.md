<div align ="center">

# agar.to

### <i>"To-Dos will PROLIFERATE, ...if you PROCRASTINATE"</i>

[@dustto24k](https://github.com/dustto24k)'s personal grad proj of
'Vanilla JS Challenge (provided by [NomadCoders](https://github.com/nomadcoders))'

</div>

## Description

### You can’t put off a to-do that self-replicates

Whenever you pretend a certain task doesn’t exist, and go back for it after a while, it’s not the same amount as you remember. WHEN DID IT GET SO HUGE??? Well, maybe your to-do is a living creature, which grows, self-replicates, and eventually eats you up..! Project agar.to starts from this somewhat childish idea. I’ll only use vanilla javascript on frontend, additional desigining with some css skills I’m also practicing in ‘CSS Layout Masterclass’. My hopes are that I could possibly make css objects move on canvas, using basic animating — so it could actually look ‘alive’. BTW The name is just a parody of ‘agar.io’. Just like any developer, I get lazy when naming things.

### Features

Minimalized clock / weather

- Counting time every seconds seemed “too much” since the whole concept was a ‘science report’. Added current date instead, as said, it is a common format for reports.
- For the same reason, decided to only load the temperature data. Converts the default metric (which is Kelvin) into Celcius, returning up to — or is it down..? anyway, — two digits below zero.

Time logged + labeled To-Do (work-in-progress)

- Creating and deleting to-dos will be immediately updated to the canvas, generating/exterminating colorized agar.
- Each To-Do will save their generated time, calculate how old they are, and ‘divide’(read 3rd para for the concept) based on it.
- Planning to categorize the development levels — which is how old they are — of each agar colonies. (the higher the level is, the more catastrophic and how careless you were about your own to-do) Some nominees for name of each level are: “enormous”, “huge”, “catastrophic”, “cute”, “dominant”, “fresh”, etc.

Responsive Layout (distant goal)

- Just a plan to make it sexier.

## DevLog

### Requirements

- [x] Realtime Clock
- [x] Log in feature using local storage
- [x] To-do list using local storage
- [ ] Random Background Image
- [x] Weather using Geolocation
- [ ] # Fancy CSS💖
- [ ] Submission before June 20, 6 a.m.

### Hurdles

[06/19 3pm | “positioning hr”]
Wanted to separate the ‘title area’ and ‘to-do list’ with a line. Thought hr would work, but began to realize it insists to keep its format; alignment, margin, etc; position-related attributes. Threw it away, coming up with an idea to build a fake line, by setting its height tiny so it could look like a line — which actually is a rectangle.
