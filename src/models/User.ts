import mongoose, { Schema, Document } from "mongoose";

// Feedback interface and schema
export interface IFeedback extends Document {
    content: string;
    createAt: Date;
}

const IFeedbackSchema: Schema<IFeedback> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

// User interface and schema
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    verifycode: string;
    verifycodeExpiry: Date;
    isVerified: boolean;
    feedbacks: IFeedback[];
    isAcceptingFeedback: boolean;
}

const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email format"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifycode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifycodeExpiry: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    feedbacks: [IFeedbackSchema],
    isAcceptingFeedback: {
        type: Boolean,
        default: true,
    },
});

// Creating the User model
const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
