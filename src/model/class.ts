import mongoose, { Document, Model } from "mongoose";

export interface Class {
    _id?: string;
    name: string;
    description: string;
    video: string;
    dateInit: Date;
    dateEnd: Date;
    dateCreated: Date;
    dateUpdated: Date;
    totalComments: number;
}

const schemaClass = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        video: { type: String, required: true },
        dateInit: { type: Date, required: true },
        dateEnd: { type: Date, required: true },
        dateCreated: { type: Date, required: true },
        dateUpdated: { type: Date },
        totalComments: { type: Number }
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

interface ClassModel extends Omit<Class, '_id'>, Document {};
export const Class: Model<ClassModel> = mongoose.model('Class', schemaClass);