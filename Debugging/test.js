function addOne (n) {
  return n + 1
}

var n = 0

for (var i = 0; i < 10; i++) {
  n = addOne(n)
  console.log('The value of `n` is', n)
  document.write('The value of `n` is ', n, '<br>')
}
