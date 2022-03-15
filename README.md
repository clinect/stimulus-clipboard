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
npm install @johnnyfreeman/stimulus-clipboard 
```

```javascript
import { Application } from "stimulus"
import Clipboard from "@johnnyfreeman/stimulus-clipboard"

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
<input
    data-controller="clipboard"
    data-action="focus->clipboard#selectCopyable" />
```

## Targets

### copyable

If `copyable` isn't specified `this.element` is used.

```html
<div data-controller="clipboard">
    <input
        data-action="focus->clipboard#selectCopyable"
        data-clipboard-target="copyable"/>
    <button data-action="click->clipboard#copy"/>
</div>
```

## Events

### copied

The `clipboard:copied` event can be acted upon just like any other event. It also includes the text that was copied with the event detail: `event.detail.copied`.

```html
<input
    data-controller="clipboard"
    data-action="click->clipboard#copy clipboard:copied->tooltip#showCopied" />
```

Or you could extend the clipboard controller with a method to show some sort of confirmation to the user.

```html
<input
    data-controller="clipboard"
    data-action="click->clipboard#copy clipboard:copied->clipboard#" />
```

## Special Thanks

🎉 Special thanks to the guys at Basecamp for creating [Stimulus](https://github.com/hotwired/stimulus) and also for making the controllers for Basecamp and Hey available for everyone to learn from.
