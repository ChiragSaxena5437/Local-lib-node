var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema(
    {
        name:{type:String, required:true, maxLength:100, minLength:3 },
    }
);

Genre
.virtual('url')
.get(function()
{
    return 'catalog/genre/'
});

module.exports = mongoose.model('Genre',Genre);