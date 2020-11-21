# vuejspostit

This is my beautiful NoteIt app for which I even made a logo.
With these shared notes app, you can enjoy the content while the others are not deleting the Notes from the API.
Very handy indeed.

With this app you can:
-Add a note
-Add content to the note you created (if input is empty, we fetch a quote of the simpsons from a foreign api)
-Delete a note
-Delete content
-Saves data to localStorage so we still render the prev version if we can't fetch from the API
-Search the notes by title only

I figured editing the content of a note or the note title would be doing the same thing as deleting a note's content so I didn't bother with it.

Also you can modify the color of a content in the same way real postit notes are made.
I wish the contents were objects it would have been much simpler to add a "color" attribute so the color could be saved overtime.
A simple reload lose the changes for now.
For the drag and drop, you can drop the content within the same note or another note. If you create another content below, the content will be stored through the mutation. If not, it will be back to the previous state.

Enjoy the testing, I put an emphasis on design because I believe it's important too.

## Project setup

```
npm install
```

## Installing Boostrap Vue & Icons

documentation on install:

```
npm install vue bootstrap-vue bootstrap
```

Then, register BootstrapVue in your app entry point:

```
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
```

// Install BootstrapVue

```
Vue.use(BootstrapVue)
```

// Install the BootstrapVue icon components plugin

```
Vue.use(IconsPlugin)
```

And import Bootstrap and BootstrapVue css files:

```
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
```

available here: https://bootstrap-vue.org/docs

## Vuetify

```
vue add vuetify
```

## (Optionnal) Vue Draggable

Allows to drag content of notes within notes (does not save to api yet)

```
npm install vuedraggable
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
