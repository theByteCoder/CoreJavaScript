var arr = [1, 2, 3, 4, 5]
var sum = 0
var totalSums = []
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (j != i) {
            sum += arr[j]
        }
    }
    totalSums[i] = sum
    sum = 0
}
totalSums.sort();
var largestSum = totalSums.pop();
var secondLargestSum = totalSums.pop();
console.log(largestSum, secondLargestSum)