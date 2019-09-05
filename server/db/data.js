import User from "../models/user.model";
import Session from "../models/session";

export const users = [ // tesisharon
  new User(1, "sharonuase@freementors.com", "Mutesi", "Sharon", "$2b$10$P49isirNhB9zp3zAt/v1O.lP9G4ygW9ri9xx8YyD9Q3QDCdMqyxMm",
    "Kigali", "this is me", "developer", "software dev", "admin"),
];

export const sessions = [
  new Session(1, 3, 4, "how soon can i start with the sessions?", "sharonuase@gmail.com", "is pending..."),
];
