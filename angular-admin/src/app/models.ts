export class Event {
    _id: String;
    start: Date;
    org_code: String;
    org_name: String;
    org_city: String;
    org_id: String;
    title: string;
    images: String[];
    featured: Boolean;

    constructor() {
        this.images = new Array<String>();
        this.images[0] = '';
        this.images[1] = '';
        this.images[2] = '';
        this.images[3] = '';
    }
}

export class City {
    _id: String;
    code: String;
    name: String;
}

export class Org {
    _id: String;
    code: String;
    name: String;
    address: Address;
    contact: Contact;
    mobile: String;
    land: String;
    email: String;
    notes: String;
    status: Boolean;

    constructor() {
        this.address = new Address();
        this.contact = new Contact();
    }
}

class Address {
    state: String;
    city: String;
    neighborhood: String;
    street: String;
    number: String;
    complement: String;
    zip_code: String;
}

class Contact {
    name: String;
    email: String;
    mobile: String;
    role: String;
    notes: String;
}