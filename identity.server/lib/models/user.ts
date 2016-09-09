import { model, Schema, SchemaType } from 'mongoose';


const UserSchemaObject: any = {
    encrypted_password: { type: String, limit: 128 },
    password_salt: { type: String, limit: 128 },
    email: String,
    remember_token: String,
    persistence_token: String,
    reset_password_token: String,
    perishable_token: String,
    sign_in_count: { type: Number, default: 0 },
    failed_attempts: { type: Number, default: 0 },
    last_request_at: Date,
    current_sign_in_at: Date,
    last_sign_in_at: Date,
    current_sign_in_ip: String,
    last_sign_in_ip: String,
    login: String,
    ship_address: [{ type: Number, ref: 'Plzoo_Address' }],
    bill_address: [{ type: Number, ref: 'Plzoo_Address' }],
    authentication_token: String,
    unlock_token: String,
    locked_at: Date,
    remember_created_at: Date,
    reset_password_sent_at: Date
};

const UserSchema = new Schema(UserSchemaObject);

export const PlzooUser = model('Plzoo_Users', UserSchema);

