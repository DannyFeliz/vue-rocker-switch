# vue-rocker-switch

> A customizable rocker switch component for Vue.js.

[<img src="https://img.shields.io/npm/dt/vue-rocker-switch.svg">](https://www.npmjs.com/package/vue-rocker-switch)
[<img src="https://img.shields.io/npm/v/vue-rocker-switch.svg">](https://www.npmjs.com/package/vue-rocker-switch)

![](https://i.imgur.com/SFobdvN.png)

## Installation

```sh
npm install vue-rocker-switch --save
```

# Demo

[![Edit vue-rocker-switch demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/qvw4o1k24)

## Usage example

```vue
<template>
  <RockerSwitch />
</template>

<script>
// Import package
import RockerSwitch from "vue-rocker-switch";
// Import styles
import "vue-rocker-switch/dist/vue-rocker-switch.css";

export default {
  name: "App",
  components: {
    RockerSwitch
  }
};
</script>
```

## Props

| Prop               | Description                                                                                             | Default value                                                      | Type             |
| ------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------- |
| value              | Boolean value attached to the rocker switcher. This will be used to initialize the component value too. | `false`                                                            | Boolean          |
| size               | rocker switch size, it can be a string (`small`, `medium` and `large`) or a decimal number              | `small`                                                            | String or Number |
| labelOn            | Text of the `On` label                                                                                  | `On`                                                               | String or Number |
| labelOff           | Text of the `Off` label                                                                                 | `Off`                                                              | String or Number |
| activeColorLabel   | Text color used when the `On` label is active                                                           | ![#fff](https://placehold.it/15/fff/000000?text=+) `#fff`          | String           |
| inactiveColorLabel | Text color used when the `Off` label is inactive                                                        | ![#333](https://placehold.it/15/333/000000?text=+) `#333`          | String           |
| backgroundColorOn  | Background color of the `On` button                                                                     | ![#0084d0](https://placehold.it/15/0084d0/000000?text=+) `#0084d0` | String           |
| backgroundColorOff | Background color of the `Off` button                                                                    | ![#bd5757](https://placehold.it/15/bd5757/000000?text=+) `#bd5757` | String           |
| borderColor        | Border color of the rocker switch                                                                       | ![#eee](https://placehold.it/15/eee/000000?text=+) `#eee`          | String           |
| toggle             | Allow to the rocker switch to behave as a toggle switch                                                 | `true`                                                             | Boolean          |

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
