var n1 = 0, n2 = 1
console.log(n1)
console.log(n2)
for (i = 2; i < 7; i++) {
    series = n1 + n2
    n1 = n2
    n2 = series
    console.log(series)
}

