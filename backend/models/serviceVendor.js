import mongoose from 'mongoose';

const serviceVendorSchema = mongoose.Schema(
  {
    vendor_email: {
      type: String,
      required: true,
    },
    vendor_name: {
      type: String,
      required: true,
    },
    service_name: {
      type: String,
      required: true,
    },
    service_type: {
      type: String,
      required: true,
    },
    quotation: {
      type: Number,
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
    from_date: {
      type: Date,
      required: true,
    },
    to_date: {
      type: Date,
      required: true,
    },
    event_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ServiceVendor = mongoose.model('ServiceVendor', serviceVendorSchema);
