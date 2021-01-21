import mongoose from 'mongoose';
const db = require('./keys').mongoURI;

async function dbConnect() {
	await mongoose
		.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true,
			// eslint-disable-next-line no-dupe-keys
			useCreateIndex: true,
			useUnifiedTopology: true,
			// eslint-disable-next-line no-dupe-keys
			useFindAndModify: false,
		})
		.then(() => console.log('MongoDB Connected'))
		.catch((err) => console.log(err));
}

export default dbConnect;
