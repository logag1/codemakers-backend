import { model, Schema } from 'mongoose';

export const Users = model(
  'users',
  new Schema({
    studentId: {
      type: String,
      required: true
    },
    clickCount: {
      type: Number,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  })
);