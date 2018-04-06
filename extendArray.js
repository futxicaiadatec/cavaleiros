window.extendArray = (() => {
  // https://gist.github.com/itacirgabral/3651d76dcf9b4e699e6e16bc8fd544a7
  const proto = Object.create(Array.prototype)
  Object.defineProperty(proto, 'sew', {
    value: function sew (a) {
      (a || a === 0) && this.push(a)
      return this
    }
  })

  return function extendArray (a) {
    const ae = Object.assign(Object.create(proto), a)
    Object.defineProperty(ae, 'length', {
      value: a.length,
      writable: true
    })
    return ae
  }
})()
