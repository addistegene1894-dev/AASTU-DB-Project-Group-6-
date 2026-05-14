db.Department.insertMany([
{
    department_id: 1,
    department_name: "food science"
},
{
    department_id: 2,
    department_name: "Software Engineering"
},
{
    department_id: 3,
    department_name: "environmental enginering"
},
{
    department_id: 4,
    department_name: "electrical "
}
])

db.Instructor.insertMany([
{
    instructor_id: 201,
    first_name: "Bekele",
    last_name: "Alemu",
    email: "bekele@aastu.edu.et",
    department_id: 1
},
{
    instructor_id: 202,
    first_name: "Hana",
    last_name: "Tesfaye",
    email: "hana@aastu.edu.et",
    department_id: 2
},
{
    instructor_id: 203,
    first_name: "Samuel",
    last_name: "Taye",
    email: "samuel@aastu.edu.et",
    department_id: 3
},
{
    instructor_id: 204,
    first_name: "Rahel",
    last_name: "Kebede",
    email: "rahel@aastu.edu.et",
    department_id: 4
}
])

db.Student.insertMany([
{
    student_id: 101,
    first_name: "Abel",
    last_name: "Tadesse",
    email: "abel@gmail.com",
    phone: "0911223344",
    date_of_birth: "2003-04-12",
    department_id: 1
},
{
    student_id: 102,
    first_name: "Meron",
    last_name: "Ali",
    email: "meron@gmail.com",
    phone: "0911334455",
    date_of_birth: "2002-08-21",
    department_id: 2
},
{
    student_id: 103,
    first_name: "Dawit",
    last_name: "Kassa",
    email: "dawit@gmail.com",
    phone: "0911445566",
    date_of_birth: "2001-07-10",
    department_id: 1
},
{
    student_id: 104,
    first_name: "Bethel",
    last_name: "Mulu",
    email: "bethel@gmail.com",
    phone: "0911556677",
    date_of_birth: "2004-01-17",
    department_id: 3
},
{
    student_id: 105,
    first_name: "Nahom",
    last_name: "Teklu",
    email: "nahom@gmail.com",
    phone: "0911667788",
    date_of_birth: "2002-05-25",
    department_id: 4
}
])

db.Course.insertMany([
{
    course_id: 301,
    course_name: "Database Systems",
    credit_hour: 3,
    instructor_id: 201
},
{
    course_id: 302,
    course_name: "Networking",
    credit_hour: 4,
    instructor_id: 202
},
{
    course_id: 303,
    course_name: "Operating Systems",
    credit_hour: 3,
    instructor_id: 203
},
{
    course_id: 304,
    course_name: "Machine Learning",
    credit_hour: 4,
    instructor_id: 204
}
])

db.Enrollment.insertMany([
{
    enrollment_id: 401,
    student_id: 101,
    course_id: 301,
    enrollment_date: "2026-01-10",
    grade: "A"
},
{
    enrollment_id: 402,
    student_id: 101,
    course_id: 302,
    enrollment_date: "2026-01-10",
    grade: "B"
},
{
    enrollment_id: 403,
    student_id: 102,
    course_id: 301,
    enrollment_date: "2026-01-11",
    grade: "A"
},
{
    enrollment_id: 404,
    student_id: 103,
    course_id: 303,
    enrollment_date: "2026-01-12",
    grade: "B+"
},
{
    enrollment_id: 405,
    student_id: 104,
    course_id: 304,
    enrollment_date: "2026-01-13",
    grade: "A-"
},
{
    enrollment_id: 406,
    student_id: 105,
    course_id: 302,
    enrollment_date: "2026-01-14",
    grade: "B"
}
])

db.Student.find()

db.Course.find()

db.Instructor.find()

db.Department.find()

db.Enrollment.find()

db.Student.find(
{
    student_id: 101
}
)

db.Course.find(
{
    course_name: "Database Systems"
}
)

db.Enrollment.find(
{
    grade: "A"
}
)

db.Student.updateOne(
{
    student_id: 101
},
{
    $set:
    {
        phone: "0911998877"
    }
}
)

db.Enrollment.deleteOne(
{
    enrollment_id: 406
}
)

db.Student.find().sort(
{
    first_name: 1
}
)

db.Course.find(
{
    credit_hour:
    {
        $gt: 3
    }
}
)

db.Student.countDocuments()

db.Course.countDocuments()