INSERT INTO Department VALUES
(1, 'food science'),
(2, 'Software Engineering'),
(3, 'environmental enginnering'),
(4, 'electrical enginnering');

INSERT INTO Instructor VALUES
(201, 'Bekele', 'Alemu', 'bekele@aastu.edu.et', 1),
(202, 'Hana', 'Tesfaye', 'hana@aastu.edu.et', 2),
(203, 'Samuel', 'Taye', 'samuel@aastu.edu.et', 3),
(204, 'Rahel', 'Kebede', 'rahel@aastu.edu.et', 4);

INSERT INTO Student VALUES
(101, 'Abel', 'Tadesse', 'abel@gmail.com', '0911223344', '2003-04-12', 1),
(102, 'Meron', 'Ali', 'meron@gmail.com', '0911334455', '2002-08-21', 2),
(103, 'Dawit', 'Kassa', 'dawit@gmail.com', '0911445566', '2001-07-10', 1),
(104, 'Bethel', 'Mulu', 'bethel@gmail.com', '0911556677', '2004-01-17', 3),
(105, 'Nahom', 'Teklu', 'nahom@gmail.com', '0911667788', '2002-05-25', 4);

INSERT INTO Course VALUES
(301, 'Database Systems', 3, 201),
(302, 'Networking', 4, 202),
(303, 'Operating Systems', 3, 203),
(304, 'Machine Learning', 4, 204);

INSERT INTO Enrollment VALUES
(401, 101, 301, '2026-01-10', 'A'),
(402, 101, 302, '2026-01-10', 'B'),
(403, 102, 301, '2026-01-11', 'A'),
(404, 103, 303, '2026-01-12', 'B+'),
(405, 104, 304, '2026-01-13', 'A-'),
(406, 105, 302, '2026-01-14', 'B');
