const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    id:  { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    year: { type: Date, required: true },
    tags: [
        { type: String, required: false }
    ],
    roles: [
        { type: String, required: false }
    ],
    paragraphs: [
        { type: String, required: false }
    ],
    bgColor: { type: String, required: false },
    images: [
        { type: String, required: false }
    ],
    repository: { type: String, required: false },
    time: { type: Date, default: Date.now() },
    thumbnail: { type: String, required: true }
});

let Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;