

import { model, Schema, SchemaType } from 'mongoose';


const StateSchemaObject: any = {
    abbr: String,
    name: String,
    country: { type: Schema.Types.ObjectId, ref: 'Plzoo_Countries' }
};

const StatesSchema = new Schema(StateSchemaObject);
export const PlzooStates = model('Plzoo_States', StatesSchema);