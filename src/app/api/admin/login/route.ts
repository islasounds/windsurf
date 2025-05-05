import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose"; // Ensure jose is imported

export async function POST(req: NextRequest) {
  try {
    console.log("Login request received");
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    // Verify the admin password
    if (password === process.env.ADMIN_PASSWORD) {
      try {
        // Create a JWT token with the admin credentials
        const token = await new SignJWT({ role: "admin" }) // include any payload you'd like
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("2h") // Token valid for 2 hours
          .sign(new TextEncoder().encode(process.env.JWT_SECRET)); // Use a secret key from your env

        // Set the JWT as a cookie
        const response = NextResponse.json({ message: "Login successful" });
        response.cookies.set({
          name: "admin",
          value: token,
          path: "/", // Set the cookie available for the entire site
          maxAge: 2 * 60 * 60, // 2 hours
          httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
          secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          sameSite: "strict", // Prevent CSRF attacks
        });

        return response;
      } catch (error) {
        console.error("Error creating JWT:", error);
        return NextResponse.json(
          { error: "Error generating token" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error in login request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
