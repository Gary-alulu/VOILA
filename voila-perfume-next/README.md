# Voila Perfume Next.js Application

This is a Next.js project for the Voila Perfume e-commerce platform.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd voila-perfume-next
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root of the `voila-perfume-next` directory and add your environment variables. For MongoDB connection, you'll need:
    ```
MONGODB_URI=mongodb://localhost:27017/voila_perfume
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
EMAIL_SERVICE=YOUR_EMAIL_SERVICE_PROVIDER (e.g., Gmail)
EMAIL_USERNAME=YOUR_EMAIL_USERNAME
EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
EMAIL_FROM=YOUR_EMAIL_ADDRESS
```

## Running the Project

To run the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `src/app`: Contains Next.js App Router pages and API routes.
-   `src/components`: Reusable React components.
-   `src/data`: Static data for navigation links and other content.
-   `src/lib`: Utility functions and MongoDB connection logic.
-   `src/models`: Mongoose schemas for database models (e.g., User, NewsletterSubscriber).
-   `src/styles`: Global styles and Tailwind CSS configurations.
-   `src/types`: TypeScript type definitions.

## Features

### User Authentication & Authorization
-   User registration with email verification.
-   User login and session management using NextAuth.js.
-   Forgot password and reset password functionality.
-   User profile management (update name, phone, address).

### Content & Engagement
-   Comprehensive FAQ section.
-   Detailed About Us page.
-   Contact Us page with multiple contact methods.

### Marketing & Sales
-   Email newsletter subscription.
-   Related product recommendations on product detail pages.

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they adhere to the project's coding standards.
4.  Write clear, concise commit messages.
5.  Submit a pull request.
