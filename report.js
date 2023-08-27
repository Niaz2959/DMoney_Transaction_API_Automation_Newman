const newman = require('newman');

newman.run({
    collection:'https://api.postman.com/collections/28923734-de1cbb21-e054-4a69-9d6a-e9e95fc6780f?access_key=PMAT-01H8VMVZ29FJ0AFRRG7DDZ3DFJ',
    reporters: 'htmlextra',
    interationCount: 1,
    reporter: {
        htmlextra: {
            export:'./Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});