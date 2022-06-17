import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	imagen: {
		url: String,
		public_id: String,
	},
})
export default mongoose.model('Post del modelo primario', postSchema)