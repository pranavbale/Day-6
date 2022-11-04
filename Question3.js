class person {
    // constructor to add the person information
    constructor(fullName, email, phoneNumber, address, gender) {
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.gender = gender;
    }

    // get the person information and set the person information
    getFullName() {
        return this.fullName;
    }
    setFullName(fullName) {
        this.fullName = fullName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getGender() {
        return this.gender;
    }
    setGender() {
        this.gender = gender;
    }
}