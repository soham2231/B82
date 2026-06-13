create database student_management;

use student_management;

create table departments(
dept_id int primary key auto_increment,
dept_name varchar(100) unique,
hod_name varchar(255)
);

show tables;

create table students(
students_id int primary key auto_increment,
first_name varchar(100),
last_name varchar(100),
email varchar(150) unique,
phone varchar(15),
dept_id int,
admission_date date,
foreign key (dept_id) references departments(dept_id)
);

create table results(
result_id int primary key auto_increment,
students_id int,
subject varchar(100),
marks int,
grade varchar(2),
foreign key (students_id) references students(students_id)
);

insert into departments(dept_name,hod_name) 
value('AI&ML','Dr.Dhoni');

insert into departments(dept_name,hod_name) values
('Computer Science','Dr.Sharma'),
('Mechanical','Dr.Kumar'),
('Electronics','Dr.Kohli');

insert into students(first_name,last_name,email,phone,dept_id,admission_date) values
('Rajat','Patidar','rajatrcb@gmail.com','1234567890',1,'2025-6-5'),
('Vaibhav','Suryavanshi','V=vaibhav@gmail.com','65434567654',2,'2025-6-4'),
('Ishan','Kishan','iishanb@gmail.com','32345654345',3,'2025-6-15'),
('Shubman','Gill','shubman@gmail.com','34567765434',4,'2025-6-1'),
('Ricky','Pointing','ricky@gmail.com','2345643456',4,'2025-7-5');

insert into students(first_name,last_name,email,phone,dept_id,admission_date) values
('Mohammad','Siraj','siraj@gmail.com','2345643456',4,'2025-7-5'),
('Jasprit','Bumraah','bum@gmail.com','2345643456',4,'2025-7-5');

 insert into results(students_id,subject,marks,grade) values
 ('1','OS','85','A'),
('2','Thermodynamics','85','A'),
 ('3','DBMS','95','A+'),
  ('4','Digital Logics','80','B'),
  ('5','Maethematics','85','A');

select * from departments;
select * from students;
select * from results;

select first_name,last_name,phone from students;

update students 
set phone='66666666666'
where students_id =1;

delete from students where students_id =13;

SELECT * FROM results
WHERE students_id = 1;

-- new queries studied


select first_name,phone from students where phone like '2%';
select students_id , marks from results where marks between 60 and 80;
select * from results where subject in ('OS','dbms');
select * from results where subject not in ('OS','dbms');
select count(*) from students;
select sum(marks) as total_marks from results;

SELECT d.dept_name, COUNT(s.students_id) AS total_students
FROM departments d
JOIN students s ON d.dept_id = s.dept_id
GROUP BY d.dept_name;

SELECT 
    s.first_name, 
    s.last_name, 
    d.dept_name, 
    r.subject, 
    r.marks, 
    r.grade
FROM students s
JOIN departments d ON s.dept_id = d.dept_id
JOIN results r ON s.students_id = r.students_id;



commit;


