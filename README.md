# vue-rocker-switch

> A customizable rocker switch component for Vue.js.

[<img src="https://img.shields.io/npm/dt/vue-rocker-switch.svg">](https://www.npmjs.com/package/vue-rocker-switch)
[<img src="https://img.shields.io/npm/v/vue-rocker-switch.svg">](https://www.npmjs.com/package/vue-rocker-switch)

![](https://i.imgur.com/SFobdvN.png)

## Installation

```sh
npm install vue-rocker-switch --save
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

## Props

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>Initial value</td>
            <td>`false`</td>
            <td>Boolean</td>
        </tr>
        <tr>
            <td>size</td>
            <td>rocker switch size, it can be a string (small, medium and large) or a decimal number</td>
            <td>small</td>
            <td>String | Number</td>
        </tr>
        <tr>
            <td>labelOn</td>
            <td>Text of the `On` label</td>
            <td>On</td>
            <td>String</td>
        </tr>
        <tr>
            <td>labelOff</td>
            <td>Text of the `Off` label</td>
            <td>Off</td>
            <td>String</td>
        </tr>
        <tr>
            <td>activeColorLabel</td>
            <td>Text color used when the `On` label is active</td>
            <td>![#fff](https://placehold.it/15/fff/000000?text=+) `#fff`</td>
            <td>String</td>
        </tr>
        <tr>
            <td>inactiveColorLabel</td>
            <td>Text color used when the `Off` label is inactive</td>
            <td>![#333](https://placehold.it/15/333/000000?text=+) `#333`</td>
            <td>String</td>
        </tr>
        <tr>
            <td>backgroundColorOn</td>
            <td>Background color of the `On` button</td>
            <td>![#0084d0](https://placehold.it/15/0084d0/000000?text=+) `#0084d0`</td>
            <td>String</td>
        </tr>
        <tr>
            <td>backgroundColorOff</td>
            <td>Background color of the `Off` button</td>
            <td>![#bd5757](https://placehold.it/15/bd5757/000000?text=+) `#bd5757`</td>
            <td>String</td>
        </tr>
        <tr>
            <td>borderColor</td>
            <td>Border color of the rocker switch</td>
            <td>![#eee](https://placehold.it/15/eee/000000?text=+) `#eee`</td>
            <td>String</td>
        </tr>
        <tr>
            <td>toggle</td>
            <td>Allow to the rocker switch to behave as a toggle switch</td>
            <td>`true`</td>
            <td>Boolean</td>
        </tr>
    </tbody>
</table>

## Events

<table>
    <thead>
        <tr>
            <th>Event</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>change</td>
            <td>Fires each time the rocker switch changes.</td>
        </tr>
    </tbody>
</table>

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```
npm install
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

## Contributing

1. Fork it (<https://github.com/dannyfeliz/vue-rocker-switch/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- This project was inspired by this post from codepen.io [Checkbox Toggle Switches Are Confusing UI](https://codepen.io/marcusconnor/post/checkbox-toggle-switches-are-confusing-ui) by [@MarcusConnorNH](https://twitter.com/MarcusConnorNH)
