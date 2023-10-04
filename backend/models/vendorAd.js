import mongoose from 'mongoose';

const vendorAdSchema = mongoose.Schema(
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
    description: {
      type: String,
      required: true,
    },
    // kuc aur
  },
  {
    timestamps: true,
  }
);

export const VendorAd = mongoose.model('VendorAd', vendorAdSchema);
