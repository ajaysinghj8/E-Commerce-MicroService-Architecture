
import { model, Schema, SchemaType } from 'mongoose';


const CountriesSchemaObject: any = {
    iso_name: String,
    iso: String,
    iso3: String,
    name: String,
    numcode: Number
};


export const PlzooCountires = model('Plzoo_Countries', CountriesSchemaObject);