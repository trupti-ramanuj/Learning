// 1. Print the student's age.
// 2. Print the student's email.
// 3. Print the student's phone.
// 4. Print the student's city.
// 5. Print the student's state.
// 6. Print the student's course.
// 7. Print the student's university.
// 8. Change the city.
// 9. Change the university.
// 10. Add pincode inside address.
// 11. Add graduationYear inside education.



const student = {
    id: 101,
    name: "Rahul",

    personal: {
        age: 20,
        gender: "Male"
    },

    contact: {
        email: "rahul@gmail.com",
        phone: "9999999999"
    },

    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India"
    },

    education: {
        course: "BCA",
        university: "ABC University"
    },
};

console.log(student.personal.age);
console.log(student.contact.email);
console.log(student.contact.phone);
console.log(student.address.city);
console.log(student.address.state);
console.log(student.education.course);
console.log(student.education.university);


student.address.city = "gandhinagar";
console.log(student.address.city)

student.education.university = "HNGU";
console.log(student.education.university);

student.address.pincode = 383838;
console.log(student.address.pincode);

student.education.graduationYear = "2026";
console.log(student.education.graduationYear);

console.log(student);

//task 14

function getStudentContact(student) {
    return {
        name: student.name,
        email: student.contact.phone
    };
}
console.log("contact", getStudentContact(student));

function getStudentAddress(student) {
    return {
        city: student.address.city,
        state: student.address.state,
        country: student.address.country
    };
}
console.log("address", getStudentAddress(student));

function getStudentEducation(student) {
    return {
        course: student.education.course,
        university: student.education.university
    };
}
console.log("education", getStudentEducation(student));