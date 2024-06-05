# Trial Work Period Calculator

## Overview

There are 12 million people receiving Social Security Disability Insurance (SSDI), a program that the US government provides individuals with income to cover housing, utilities, food, and other essentials costs of living.

## Description

Ticket to Work program incentivizes beneficiaries who return to the workforce. After starting employment, they continue receiving benefits during a Trial Work Period. This is a window up to 9 months where they can make an unlimited amount of income before they loss their benefits. There are no tools that give beneficiaries the date that they will loss benefits. This results in overpayment where the government will expect 100% recovery. Trial to Work Period calculator returns a date that users can expect to loss benefits. This prevents them from being overpaid by the government.

## Assumptions

- Users enrolled in Ticket to Work program through United States Social Security Administration
- Users know the date that they began employment
- Users monthly income equals or exceeds \$1,110
- Users income won’t change for 9 consecutive months

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Setup](#setup)
- [UI & Wireframe](#ui)
- [Credits](#credits)
- [License](#license)

## Setup

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=disability_calculator
DB_PASS=YOUR_PASSWORD
```

(replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database disability_calculator;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 4000
- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.
- You can test your client app in `http://localhost:5173`
- You can test your API in `http://localhost:4000/api`

## UI & Wireframe[need to add]

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## API

[Luxon](https://www.npmjs.com/package/luxon#luxon) documentation

[DeepL](https://developers.deepl.com/docs) documentation
[Sign up for a free API key](https://support.deepl.com/hc/en-us/articles/360019358899-Access-to-DeepL-s-API)

## Credits[will update after feature extension]

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. [need to add attributes for social media icons]

If you followed tutorials, include links to those here as well.

## License[NEED TO UPDATE]

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
