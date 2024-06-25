import { connectMongoDB } from "@/api_lib/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const projectid = generateRandomString(7);

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
