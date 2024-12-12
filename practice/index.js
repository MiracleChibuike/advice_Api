const student = {
  student_name: "tobe",
  age: 21,
  address: {
    city: "manchester",
    postal_code: 213134,
    apt_number: 213,
  },
  graduated: true,
};

// console.log(student);

const json_parse = JSON.stringify(student);

// console.log(json_parse);

const student2 = '{"name": "chidiebere" , "age": 21 , "colour": "red"}';

const json_parsee = JSON.parse(student2);

console.log(json_parsee);
