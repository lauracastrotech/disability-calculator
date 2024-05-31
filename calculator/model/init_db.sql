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
    `endWindow` DATE NOT NULL
);

CREATE TABLE `incomes_dates`(
    `incomeId` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- `userId` INT,
    `monthlyIncome` INT NOT NULL,
    `twpMonths` INT NOT NULL,
    `twpDate` DATE NOT NULL
    -- FOREIGN KEY (`userId`) REFERENCES `users`(`id`) getting syntax error when I try to add FK may 
    -- ALTER TABLE
    -- `twp_dates` ADD CONSTRAINT `twp_dates_twp_id_foreign` FOREIGN KEY(`twp_id`) REFERENCES `users`(`user_id`);
);

--
-- Insert Users
--

INSERT INTO users(firstName, lastName, startWindow, endWindow) 
VALUES 
  ('Janelle', 'Monae', '2024-06-1', '2029-06-1'), 
  ('Erykah', 'Badu', '2022-12-10', '2027-12-10');

INSERT INTO incomes_dates(monthlyIncome, twpMonths, twpDate) 
VALUES 
  (1500, 9, '2025-03-01'), 
  (1250, 9, '2023-09-10');
