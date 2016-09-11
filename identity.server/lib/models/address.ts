
import { model, Schema, SchemaType } from 'mongoose';

const AddressSchemaObject: any = {
    firstname: String,
    lastname: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    zipcode: String,
    phone: String,
    alternative_phone: String,
    country: { type: Schema.Types.ObjectId, ref: 'Plzoo_Countries' },
    state: {}
};

const AddressSchema = new Schema(AddressSchemaObject);

export const PlzooAddress = model('Plzoo_Address', AddressSchema);