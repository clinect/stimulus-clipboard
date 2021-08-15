# Stimulus Clipboard

A stimulus controller for copy-to-clipboard functionality.

## Installation

```shell
npm install stimulus-clipboard
```

```javascript
import { Application } from "stimulus"
import Clipboard from "stimulus-clipboard"

const application = Application.start()
application.register("clipboard", Clipboard)
```

## Actions

### copy

```html
<input data-controller="clipboard" data-action="click->clipboard#copy" />
```

### selectCopyable

```html
<div data-controller="clipboard">
    <input data-action="focus->clipboard#selectCopyable" data-clipboard-target="copyable"/>
    <button data-action="click->clipboard#copy"/>
</div>
```

## Target

### copyable

```html
<input data-controller="clipboard" data-action="click->clipboard#copy clipboard:copied->tooltip#show" />
```

## Events

### copied

```html
<input data-controller="clipboard" data-action="click->clipboard#copy clipboard:copied->tooltip#show" />
```