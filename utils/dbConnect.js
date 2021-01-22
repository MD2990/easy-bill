import mongoose from 'mongoose';
const DB = process.env.DB;
let isConnected = false;

async function dbConnect() {
	if (!isConnected) {
		console.log(`Connecting to ${DB} ... `);
		await mongoose
			.connect(DB, {
				useNewUrlParser: true,
				useCreateIndex: true,
				useFindAndModify: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			})
			.then(() => {
				isConnected = true;
				console.log('MongoDB Connected');
			})
			.catch((err) => console.log(err));
	}
}

export default dbConnect;
