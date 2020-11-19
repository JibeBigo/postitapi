# vuejspostit

With NoteIt (even made a slick logo for it), you can:

- Add Notes (big squares)
- Add Content to these notes (tasks)
- Delete Notes & Content

Everything is pulled and pushed from an API endpoint and shared with everybody which is really handy as everyone can delete each other's notes and add their own.
Tried to make a pretty slick design, following the original theme of commonly used Post It notes.
I've decided to not add the edition of note title or it's content as it follows the samed idead as editing the content and wouldn't be super useful.
I added a draggable content inside the notes instead. It doesn't save to the API but it looks pretty nice before you refresh the page.

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
