--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists users;
DROP TABLE if exists twp_dates;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `twp_dates`(
    `twp_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employ_date` DATE NOT NULL,
    `twp_date` DATE NOT NULL,
    `income` INT NOT NULL
);

ALTER TABLE
    `twp_dates` ADD CONSTRAINT `twp_dates_twp_id_foreign` FOREIGN KEY(`twp_id`) REFERENCES `users`(`user_id`);

--
-- Insert Users
--

INSERT INTO users(first_name, last_name) 
VALUES 
  ('Janelle', 'Monae'), 
  ('Erykah', 'Badu');

INSERT INTO twp_dates(employ_date, twp_date, income) 
VALUES 
  ('2024-01-01', '2024-10-01', 1500), 
  ('2023-10-15', '2024-07-01', 1250);
