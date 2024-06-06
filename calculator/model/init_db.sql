--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
DROP TABLE if exists incomes_dates;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `startWindow` DATE NOT NULL,
    `endWindow` DATE NOT NULL,
    `income` INT NOT NULL
);

CREATE TABLE `incomes_dates`(
    `incomeId` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userId` INT UNSIGNED NOT NULL,
    `monthlyIncome` INT NOT NULL,
    `twpMonths` INT NOT NULL,
    `twpDate` DATE NOT NULL
);

ALTER TABLE `incomes_dates`
    ADD CONSTRAINT `userId_fk` FOREIGN KEY(`userId`) REFERENCES `users`(`id`); 

--
-- Insert Values
--

INSERT INTO `users` (`firstName`, `lastName`, `startWindow`, `endWindow`, `income`) VALUES
('John', 'Doe', '2023-01-01', '2023-12-31', 50000),
('Jane', 'Smith', '2023-02-01', '2023-11-30', 55000),
('Alice', 'Johnson', '2023-03-01', '2023-10-31', 60000),
('Bob', 'Williams', '2023-04-01', '2023-09-30', 65000),
('Charlie', 'Brown', '2023-05-01', '2023-08-31', 70000),
('Dave', 'Davis', '2023-06-01', '2023-07-31', 75000),
('Eve', 'Miller', '2023-01-15', '2023-11-15', 80000),
('Frank', 'Wilson', '2023-02-15', '2023-10-15', 85000),
('Grace', 'Moore', '2023-03-15', '2023-09-15', 90000),
('Hank', 'Taylor', '2023-04-15', '2023-08-15', 95000),
('Ivy', 'Anderson', '2023-05-15', '2023-07-15', 100000),
('Jack', 'Thomas', '2023-01-10', '2023-12-10', 105000),
('Karen', 'Jackson', '2023-02-10', '2023-11-10', 110000),
('Leo', 'White', '2023-03-10', '2023-10-10', 115000),
('Mia', 'Harris', '2023-04-10', '2023-09-10', 120000),
('Noah', 'Martin', '2023-05-10', '2023-08-10', 125000),
('Olivia', 'Thompson', '2023-06-10', '2023-07-10', 130000),
('Paul', 'Garcia', '2023-01-05', '2023-12-05', 135000),
('Quinn', 'Martinez', '2023-02-05', '2023-11-05', 140000),
('Rachel', 'Robinson', '2023-03-05', '2023-10-05', 145000);

INSERT INTO `incomes_dates` (`userId`, `monthlyIncome`, `twpMonths`, `twpDate`) VALUES
(1, 4167, 2, '2023-01-01'),
(2, 4583, 2, '2023-02-01'),
(3, 5000, 2, '2023-03-01'),
(4, 5417, 2, '2023-04-01'),
(5, 5833, 2, '2023-05-01'),
(6, 6250, 2, '2023-06-01'),
(7, 6667, 2, '2023-01-15'),
(8, 7083, 2, '2023-02-15'),
(9, 7500, 2, '2023-03-15'),
(10, 7917, 2, '2023-04-15'),
(11, 8333, 2, '2023-05-15'),
(12, 8750, 2, '2023-01-10'),
(13, 9167, 2, '2023-02-10'),
(14, 9583, 2, '2023-03-10'),
(15, 10000, 2, '2023-04-10'),
(16, 10417, 2, '2023-05-10'),
(17, 10833, 2, '2023-06-10'),
(18, 11250, 2, '2023-01-05'),
(19, 11667, 2, '2023-02-05'),
(20, 12083, 2, '2023-03-05');




