
import { model, Schema, SchemaType } from 'mongoose';


const CountriesSchemaObject: any = {
    iso_name: String,
    iso: String,
    iso3: String,
    name: String,
    numcode: Number
};

const CountriesSchema =  new Schema(CountriesSchemaObject);
export const PlzooCountires = model('Plzoo_Countries', CountriesSchema);