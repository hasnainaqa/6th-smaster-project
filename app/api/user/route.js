import { connectMongoDB } from "@/api_lib/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

const projectid = "10"
function projectId() {

    return(
        <div>    "file:///C:/Users/muham/Desktop/feedbackHQ/FeedbackCDN.js?projectID="{projectid}" 
</div>
    )
    
}

export async function POST(request) {
    try {
        const { name, email } = await request.json();
        await connectMongoDB();
        await User.create({ projectid, name, email });
        projectId();
        return NextResponse.json({ message: "User Registered" }, { status: 201 });
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
    }
}
