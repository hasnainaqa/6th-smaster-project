// Import necessary modules
import { connectMongoDB } from '@/api_lib/mongodb';
import Feedback from '@/models/feedbacks';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { projectID, email, feedback } = await request.json();

        

        // Connect to MongoDB
        await connectMongoDB();

        console.log("projectID: ", projectID)
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
