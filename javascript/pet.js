function pet(name, age, type, hobbies){
    this.name = name;
    this.age = age;
    this.type = type;
    this.hobbies = hobbies;
}

let petArray = [
    new pet("stickky", 8, "Margin-winged stick insect" ,"Chilling around leafs and twigs"),
    new pet("kia", 4, "Kea bird", "Hang out with his mates detailing cars and fighting injustice")
];

module.exports = petArray;