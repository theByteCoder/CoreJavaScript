var jsonContent = require('./JSONFile.json')

console.log(jsonContent.User)

for (var property in jsonContent) {
  console.log(property + ' : ' + property.valueOf())
}
