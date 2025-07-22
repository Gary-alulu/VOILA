import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this product.'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this product.'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL for this product.'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this product.'],
  },
  stock: {
    type: Number,
    required: [true, 'Please provide the stock quantity for this product.'],
    default: 0,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);