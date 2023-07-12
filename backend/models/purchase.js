const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      point: {
        type: Number,
        required: true
      },
    }
  ],
  price: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  CEP: {
    type: String,
    required: true
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
