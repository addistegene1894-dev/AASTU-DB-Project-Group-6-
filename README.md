# AASTU-DB-Project-Group-6-

## project title
STUDENT MANAGEMENT SYSTEM DATABASE
## Information
group :6
course:database system
Department: Software Engineering, AASTU

## Group Memebers
   NAME                                            ID NUMBER
               1 . Addis Tegene    ………………………………………ETS0097/17 
               2. Amanuel  Alemayehu …………………………………ETS0144/17
               3. Amensisa  Geremew ………………………………… ETS0169/17
               4. Abel Gebregziabher……………………………………ETS0028/17
               5. Birhanu Liku……………………………………………...ETS0321/17
               6.Dawit Woldtinsae……………………………………….ETS0428/17 
## Project Description
This project involves the design and implementation of a Student Management System for Addis Ababa Science and Technology University. The system is designed to transition from traditional manual data management to a computerized database approach to resolve issues such as data redundancy, inconsistency, and ineffective search capabilities.  
Core ObjectivesData :

Efficiency: Efficiently store and manage data for students, courses, instructors, and departments. 

Redundancy Reduction: Utilize normalization techniques (up to BCNF) to ensure data integrity. 

Dual Implementation: Demonstrate the application of both Relational (MySQL) and NoSQL (MongoDB) database systems.  System FeaturesFunctional Scope: Includes student registration, course management, instructor assignments, department management, and grade tracking. 

Database Design: Features a structured schema with five primary entities: Student, Course, Instructor, Department, and Enrollment. 
Operations: Supports standard database operations including insertion, retrieval, updating, and deletion across both platforms.  
Technical StackMySQL: Used for relational data handling, primary/foreign key constraints, and SQL querying.  

MongoDB: Used for document-oriented storage using JSON-like formats for flexible data management.  
Design Tools: Draw.io was utilized for creating ER diagrams to visualize entity relationships.  The final system was successfully tested to verify that it accurately retrieves records and maintains data consistency, satisfying all initial project requirements.

## Final Data Model
Attributes of Entities
Student
student_id (PK)
first_name
last_name
email
phone
date_of_birth
department_id (FK)
Course
course_id (PK)
course_name
credit_hour
instructor_id (FK)
Instructor
instructor_id (PK)
first_name
last_name
email
department_id (FK)
Department
department_id (PK)
department_name
Enrollment
enrollment_id (PK)
student_id (FK)
course_id (FK)
enrollment_date
grade
2.3 Relationships
Department → Student (1:M)
Department → Instructor (1:M)
Instructor → Course (1:M)
Student ↔ Course (M:N via Enrollment)

## Repository Structure
The repository follows the required submission format:

/docs
	final_report.pdf
	presentation.pptx
/mysql
	schema.sql
	queries.sql
/mongodb
	collections.json
	queries.js
/diagrams
	erd.png
	normalization.pdf
/annex
	survey_questions.pdf
	sample_forms.pdf
CONTRIBUTION.md
README.md

## Technologies Used
- MySQL 8+
- MongoDB 6+

## How To Run

### MySQL
1. Create a database:
	- CREATE DATABASE student managment_db;
	- USE student managment_db;
2. Run schema script from mysql/schema.sql.
3. Run data and query script from mysql/queries.sql.

### MongoDB
1. Open mongosh.
2. Run:
	- use student managment_db
	 - load("mongodb/queries.js")
3. Optional: import sample JSON from mongodb/collections.json if preferred.












