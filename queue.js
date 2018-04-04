// https://github.com/nolanlawson/tiny-queue
(
    () => {
      function Queue () {
        this.length = 0
      }

      Queue.prototype.push = function (...item) {
        item.forEach(i => {
          var node = {item: i}
          if (this.last) {
            this.last = this.last.next = node
          } else {
            this.last = this.first = node
          }
          this.length++
        })
      }

      Queue.prototype.shift = function () {
        var node = this.first
        if (node) {
          this.first = node.next
          if (!(--this.length)) {
            this.last = undefined
          }
          return node.item
        }
      }

      Queue.prototype.slice = function (start, end) {
        start = typeof start === 'undefined' ? 0 : start
        end = typeof end === 'undefined' ? Infinity : end

        var output = []

        var i = 0
        for (var node = this.first; node; node = node.next) {
          if (--end < 0) {
            break
          } else if (++i > start) {
            output.push(node.item)
          }
        }
        return output
      }

      window.Queue = Queue
    }
)()
