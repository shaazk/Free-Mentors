import User from "../models/user.model";
import Session from "../models/session";

export const users = [ // 1234567
  new User(1, "ggg@gmail.com", "koko", "baba", "$2b$10$HrkPqpTCDf2dK4yhwsODPeRxnz7lR.Y.lubTEcDjrWpuC3zAztSgu", "Kigali", "this is me", "developer", "software dev", "admin"),
];

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdnZ0BnbWFpbC5jb20iLCJpYXQiOjE1NjcyOTU3NjN9.4YbJe5kFLIsz3-U4y0w_r509K5LZOCBODKDRlpB3LM0

export const sessions = [
  new Session(1, 3, 4, "how soon can i start with the sessions?", "sharonuase@gmail.com", "is pending...")
];
