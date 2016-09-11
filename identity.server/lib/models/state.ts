
import { model, Schema, SchemaType } from 'mongoose';

const StateSchemaObject = {
    name: String,
    abbr: String,
    country: { type: Schema.Types.ObjectId, ref: 'Plzoo_Countries' }
};

export const StateSchema = new Schema('Plzoo_States',StateSchemaObject);