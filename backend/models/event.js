import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
  {
    event_id: {
      type: Number,
      required: true,
    },
    client_name: {
      type: String,
      required: true,
    },
    client_phone: {
      type: String,
      required: true,
    },
    client_email: {
      type: String,
      required: true,
    },
    budget_min: {
      type: Number,
      required: true,
    },
    budget_max: {
      type: Number,
      required: true,
    },
    from_date: {
      type: Date,
      required: true,
    },
    to_date: {
      type: Date,
      required: true,
    },
    organiser_email: {
      type: String,
      required: true,
    },
    organiser_name: {
      type: String,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
    // kuch aur dalna hai toh
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model('Event', eventSchema);
