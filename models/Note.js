import { Schema, models, model } from 'mongoose';

const NoteSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please add a title'],
		maxlength: [40, 'Title cannot be more than 40 characters'],
	},
	description: {
		type: String,
		required: true,
		maxlength: [200, 'Description cannot be more than 200 characters'],
	},
});

export default models.nextdb || model('nextdb', NoteSchema);
