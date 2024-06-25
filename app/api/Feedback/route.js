// Import necessary modules
import { connectMongoDB } from '@/api_lib/mongodb';
import Feedback from '@/models/feedbacks';
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const { image, projectID, email, feedback } = await request.json();

        console.log("projectID: ", projectID)
        console.log("email: ", email)
        console.log("feedback: ", feedback)
        console.log("image: ", image)


        // Connect to MongoDB
        await connectMongoDB();

        const uploadResponse = await cloudinary.uploader.upload(image,{});

        console.log("uploadResponse: ", uploadResponse)
        // Create a new feedback document in MongoDB
        await Feedback.create({ projectID, email, feedback });

        // Respond with success message
        return NextResponse.json({ message: "Feedback received" }, { status: 201 });
    } catch (error) {
        // Handle errors and respond with an appropriate error message
        console.error("Error receiving feedback:", error);
        return NextResponse.json({ error: "Failed to receive feedback" }, { status: 500 });
    }
}
