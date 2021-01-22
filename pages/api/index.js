import Note from '../../models/Note';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {
	await dbConnect();

	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const nextDB = await Note.find({});

				res.status(200).json({ success: true, data: nextDB });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const nextDB = await Note.create(req.body);

				res.status(201).json({ success: true, data: nextDB });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
