import { model, Schema, SchemaType } from 'mongoose';
import * as crypto from 'crypto';

const UserSchemaObject: any = {
    encrypted_password: { type: String, limit: 128 },
    password_salt: { type: String, limit: 128 },
    email: { type: String, unique: true },
    username: { type: String, unique: true },
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
    ship_address: [{ type: Schema.Types.ObjectId, ref: 'Plzoo_Address' }],
    bill_address: [{ type: Schema.Types.ObjectId, ref: 'Plzoo_Address' }],
    authentication_token: String,
    unlock_token: String,
    locked_at: Date,
    remember_created_at: Date,
    reset_password_sent_at: Date
};

const UserSchema = new Schema(UserSchemaObject);


function encryptPassword(password, password_salt = crypto.randomBytes(20).toString('hex')) {
    let encrypt_password = crypto.createHmac('sha512', password_salt);
    encrypt_password.update(password);
    let encrypted_password = encrypt_password.digest('hex');
    return {
        password_salt, encrypted_password
    };
}

function validatePassword(password, encrypted_password, password_salt) {
    return encryptPassword(password, password_salt).encrypted_password === encrypted_password;
};

UserSchema.statics.validatePassword = validatePassword;
UserSchema.statics.encryptPassword = encryptPassword;
export const PlzooUser = model('Plzoo_Users', UserSchema);

