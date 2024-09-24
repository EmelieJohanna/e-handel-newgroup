# E-Commerce Webshop

This project is a continuation of a short group project where we created a e-commerce webshop. The application fetches product data from an external API and uses **Redux Toolkit** for state management, **Tailwind CSS** for styling, and is built using **Vite** and **React** for web development.

Additionally, this version implements **SEO enhancements** with metadata, Open Graph tags, a dynamically generated sitemap, and a dynamic robots.txt file for controlling search engine indexing.

The original group project repository can be found here: [nyGrupp_e-handel](https://github.com/fallowshades/nyGrupp_e-handel.git).

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [SEO Enhancements](#seo-enhancements)

## Overview

This project started as a group exercise, focusing on creating a simple e-commerce website using modern web technologies. The website allows users to browse products fetched from an API, manage their shopping cart, and search through products.

This version builds on the original group effort, introducing various improvements, especially in SEO.

## Tech Stack

- **Vite**: A fast build tool that provides an optimized development environment for modern web projects.
- **React**: The core library used to build user interfaces and manage the component lifecycle.
- **Redux Toolkit**: For state management, handling actions like adding products to the cart and managing API fetch.
- **Tailwind CSS**: A utility-first CSS framework used to style the application.
- **FakeStoreAPI**: The project uses the [FakeStoreAPI](https://fakestoreapi.com/products) to fetch product data.

## Features

- **Product List**: Browse products fetched dynamically from the FakeStoreAPI.
- **Shopping Cart**: Add and remove products from the cart, with quantities managed using Redux Toolkit.
- **Responsive Design**: The site is fully responsive, using Tailwind CSS for styling.
- **Fast Development Setup**: The project uses Vite for fast builds and development speeds.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EmelieJohanna/e-handel-newgroup.git

   ```

2. Navigate to the project directory:

   ```bash
   cd e-handel-newgroup

   ```

3. Install dependencies:
   ```bash
   npm install

   ```

## Usage:

1. Start the development server:

   ```bash
   npm run dev

   ```

2. Then visit:
   ```bash
   http://localhost:3000
   ```

## SEO Enhancements

- **Metadata & Open Graph Tags**: Added using React Helmet Async to improve SEO and social sharing.
- **Sitemap**: Dynamically generated sitemap.xml that updates with new pages.
- **Robots.txt**: Dynamically generated to control which parts of the site are indexed based on environment.
