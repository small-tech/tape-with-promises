# Tape With Promises

Adds promise support ([`rejects()`](https://github.com/jprichardson/tape-promise#trejectspromise-expected-msg), [`doesNotReject()`](https://github.com/jprichardson/tape-promise#tdoesnotrejectpromise-expected-msg)) to [tape](https://github.com/substack/tape) by decorating it using [tape-promise](https://github.com/jprichardson/tape-promise).

## Install

```
npm install --save-dev @small-tech/tape-with-promises
```

## Use

```js
import test from '@small-tech/tape-with-promises'

test('promises', async t => {
  await t.rejects(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // This does, indeed, reject.
        reject('Oh, no!')
      }, 100)
    })
  })
  await t.doesNotReject(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // This does, indeed, resolve.
        resolve('Yay!')
      })
    })
  })
})
```

If you save the above test in _tests/index.js_, you can run it with:

```shell
npx tape tests/**/*.js
```

Or, in your _package.json_ file:

```json
{
  "scripts": {
    "test": "tape tests/**/*.js"
  }
}
```

## Test

```shell
npm -s test
```

## Like this? Fund us!

[Small Technology Foundation](https://small-tech.org) is a tiny, independent not-for-profit.

We exist in part thanks to patronage by people like you. If you share [our vision](https://small-tech.org/about/#small-technology) and want to support our work, please [become a patron or donate to us](https://small-tech.org/fund-us) today and help us continue to exist.

## Related projects

  - [tap-monkey](https://github.com/small-tech/tap-monkey): A [tap](https://testanything.org/) formatter that’s also a monkey. Displays test runner status using a static single-line spinner (hint: it’s a monkey) and only fills your screen with text on failures and with your coverage report.

## Credits

  - [tape](https://github.com/substack/tape) by [James Halliday](https://github.com/substack) et al.
  - [tape-promise](https://github.com/jprichardson/tape-promise) by [JP Richardson](https://github.com/jprichardson)

## Copyright

Copyright ⓒ 2022-present, [Aral Balkan](https://ar.al), [Small Technology Foundation](https://small-tech.org).

## License

Released under [GNU AGPL version 3.0 or later](https://www.gnu.org/licenses/agpl-3.0.en.html).
