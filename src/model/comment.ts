import mongoose, { Document, Model } from "mongoose";

export interface Comment {
    _id?: string;
    comment: string;
    dateCreated: Date;
};

const schemaComment = new mongoose.Schema (
    {
        comment: { type: String, required: true },
        dateCreated: { type: Date, required: true}
    },
    {
        toJSON: {
            transform: (_, ret): void => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

interface CommentModel extends Omit<Comment, '_id'>, Document {};
export const Comment: Model<CommentModel> = mongoose.model('Comment', schemaComment);