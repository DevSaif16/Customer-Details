
export interface dob{
    age: string;
    date:string;
}
export interface id{
    name:string;
    value:string;
}
export interface coordinates {
    latitude: string;
    longitude: string;
}
export interface street{
    name: string;
    number: string;
}
export interface timezone{
    description: string;
    offset: string;
}
export interface location{
    city: string;
    coordinates: coordinates;
    country: string;
    postcode: string;
    state: string,
    street: street,
}
export interface login{
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;username: string;
    uuid: string;
}
export interface name{
    first: string;
    last: string;
    title: string;
}
export interface picture{
    large: string;
    medium: string;
    thumbnail: string;
}
export interface registered{
    age: string;
    date: string;
}
export interface CustData{
    cell:string;
    dob:dob;
    email:any;
    gender:string;
    id:id;
    location: location;
    login: login;
    name:name;
    nat: string;
    phone:string;
    picture:picture;
    registered: registered
}


