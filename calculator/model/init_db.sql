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


