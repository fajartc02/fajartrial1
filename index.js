const argv = process.argv
const input = argv.slice(4)
const command = `${argv[2]} ${argv[3]}`
const ControllerAuthors = require('./Controller/authors.js')
const ControllerArticles = require('./Controller/articles.js')
const ControllerTags = require('./Controller/tags.js')
const Controller = require('./Controller/Controllers.js')

if(command === 'author add') {
  ControllerAuthors.authorAdd(input[0], input[1], input[2], input[3], input[4])
} else if (command === 'author read_one') {
  ControllerAuthors.authorReadOne()
} else if (command === 'author read_all') {
  ControllerAuthors.authorReadAll()
} else if (command === 'author update') {
  ControllerAuthors.authorUpdate()
} else if (command === 'author delete') {
  ControllerAuthors.authorDelete()
} else if (command === 'article add') {
  ControllerArticles.articleAdd()
} else if (command === 'article read_one') {
  ControllerArticles.articleReadOne()
} else if (command === 'article read_all') {
  ControllerArticles.articleReadAll()
} else if (command === 'article update') {
  ControllerArticles.articleUpdate()
} else if (command === 'article delete') {
  ControllerArticles.articleDelete()
}  else if (command === 'tag add') {
  ControllerTags.tagAdd()
} else if (command === 'tag read_one') {
  ControllerTags.tagReadOne()
} else if (command === 'tag read_all') {
  ControllerTags.tagReadAll()
} else if (command === 'tag update') {
  ControllerTags.tagUpdate()
} else if (command === 'tag delete') {
  ControllerTags.tagDelete()
} else if (command === 'help undefined'){
  Controller.help()
} else {
  Controller.blank()
}
