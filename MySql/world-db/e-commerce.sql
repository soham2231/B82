CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE users (
    id int primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(100) not null,
    role ENUM('user','admin') default 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10,2),
    stock INT,
    image VARCHAR(255),
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id)
    REFERENCES categories(id)
);

CREATE TABLE cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    quantity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id),

    FOREIGN KEY (product_id)
    REFERENCES products(id)
);

INSERT INTO users(name,email,password,role) VALUES
('Soham','soham@gmail.com','1234','admin'),
('Anuj','anuj@gmail.com','1234','user'),
('Prathmesh','prathm@gmail.com','1234','user'),
('Rushi','rushi@gmail.com','1234','user'),
('Prafull','prafull@gmail.com','1234','user');

INSERT INTO categories(name,description) VALUES
('Electronics','Electronic Products'),
('Fashion','Fashion Products'),
('Books','Books Collection'),
('Home Appliances','Home Products'),
('Beauty','Beauty Products');

INSERT INTO products
(title,description,price,stock,image,category_id)
VALUES
('Laptop','HP Laptop',55000,20,'laptop.jpg',1),
('Mobile','Samsung Mobile',25000,30,'mobile.jpg',1),
('Monitor','Dell Monitor',18000,15,'monitor.jpg',1),
('Keyboard','Mechanical Keyboard',2000,50,'keyboard.jpg',1),
('Mouse','Wireless Mouse',1200,40,'mouse.jpg',1),
('Shirt','Cotton Shirt',1500,25,'shirt.jpg',2),
('Jeans','Blue Jeans',2500,18,'jeans.jpg',2),
('Java Book','Programming Book',700,35,'java.jpg',3),
('Mixer','Kitchen Mixer',4500,10,'mixer.jpg',4),
('Face Wash','Skin Care Product',300,60,'facewash.jpg',5);

INSERT INTO cart(user_id,product_id,quantity)
VALUES
(1,1,1),
(2,2,2),
(3,6,1),
(4,8,3),
(5,10,2);

SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM cart;