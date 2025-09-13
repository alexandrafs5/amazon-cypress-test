# Amazon Add-to-Cart Cypress Test

This project demonstrates an automated test for Amazon's **Add to Cart** functionality using **Cypress** and the **Page Object Model (POM)** pattern.

## Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Notes](#notes)
- [Author](#author)

## Overview
The goal of this project is to create a reliable automated test that:
1. Visits Amazon's website.
2. Adds a selected product to the cart.
3. Verifies that the product was added successfully.

The project uses **Page Object Model** to organize selectors and test logic, making it easier to maintain and scale.

## Technologies
- JavaScript (ES6)
- Cypress
- Git / GitHub
- Page Object Model pattern

## Installation
1. Clone the repository:
```bash
git clone git@github.com:alexandrafs5/amazon-cypress-test.git
```
2. Navigate to the project folder:
```bash
cd amazon-cypress-test
```
3. Install dependencies:
```bash
npm install
```

## Usage
1. Open Cypress test runner:
```bash
npx cypress open
```
2. Select the amazon_add_to_cart.cy.js spec.
3. Run the test in your preferred browser (Chrome recommended).

## Project Structure


## Notes
• This project is meant for learning purposes and practicing Cypress automation.
• Uses Page Object Model to separate test logic from selectors.
• The test verifies basic functionality and can be extended for more complex scenarios.

## Author
Alexandra Fernández