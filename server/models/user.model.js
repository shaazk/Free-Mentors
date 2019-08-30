export class User{
    constructor(userId, email, firstName, lastName, password, address, bio, occupation, expertise, role = "mentee") {
        this.userId = userId;
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.bio = bio;
        this.occupation = occupation;
        this.expertise = expertise;
        this.role = role;
    }
}