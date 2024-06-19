import mongoose, { Schema,  models } from "mongoose";

const feedbackSchema = new Schema(
    {
        projectID: {
            type: String,  
            required: true,
        },
        email: {
            type: String,  
            required: true,
        },
        feedback: {
            type: String,  
            required: true,
        },
    },
    { timestamps: true }
);

const Feedback = models.Feedback || mongoose.model('Feedback', feedbackSchema);

export default Feedback;
