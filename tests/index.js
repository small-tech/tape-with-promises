import test from '../index.js'

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
