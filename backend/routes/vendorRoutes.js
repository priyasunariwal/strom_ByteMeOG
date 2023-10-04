import express from 'express';
import { VendorAd } from '../models/vendorAd'; 

const router = express.Router();

router.post('/createAd', async (request, response) => {
  try {
    const {
      vendor_email,
      vendor_name,
      service_name,
      service_type,
      quotation,
      description,
    } = request.body;

    if (
      !vendor_email ||
      !vendor_name ||
      !service_name ||
      !service_type ||
      !quotation ||
      !description
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }

    const newVendorAd = {
      vendor_email,
      vendor_name,
      service_name,
      service_type,
      quotation,
      description,
    };

    const vendorAd = await VendorAd.create(newVendorAd);

    return response.status(201).send(vendorAd);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
