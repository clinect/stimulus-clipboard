# Stimulus Clipboard

A [Stimulus](https://github.com/hotwired/stimulus) controller for copy-to-clipboard functionality. Unlike other takes on this, this one tries to get out of your way by dispatching a `copied` event when text is copied to the clipboard. This opens the door for calling an action on another controller.

* [Installation](#installation)
* [Actions](#actions)
    * [copy](#copy)
    * [selectCopyable](#selectCopyable)
* [Targets](#targets)
    * [copyable](#copyable)
* [Events](#events)
    * [copied](#copied)
* [Special Thanks](#special-thanks)

## Installation

```shell
npm install @johnfreeman/stimulus-clipboard 
```

```javascript
import { Application } from "stimulus"
import Clipboard from "@johnfreeman/stimulus-clipboard "

const application = Application.start()
application.register("clipboard", Clipboard)
```

## Actions

### copy

```html
<input
    data-controller="clipboard"
    data-action="click->clipboard#copy" />
```

### selectCopyable

```html
<div data-controller="clipboard">
    <input
        data-action="focus->clipboard#selectCopyable"
        data-clipboard-target="copyable"/>
    <button data-action="click->clipboard#copy"/>
</div>
```

## Targets

### copyable

```html
<input
    data-controller="clipboard"
    data-action="click->clipboard#copy clipboard:copied->tooltip#show" />
```

## Events

### copied

```html
<input
    data-controller="clipboard"
    data-action="click->clipboard#copy clipboard:copied->tooltip#show" />
```

## Special Thanks

🎉 Special thanks to the guys at Basecamp for creating [Stimulus](https://github.com/hotwired/stimulus) and also for making the controllers for Basecamp and Hey available for everyone to learn from.