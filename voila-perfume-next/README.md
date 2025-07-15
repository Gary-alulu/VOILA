# Voila Perfume Next

Voila Perfume Next is a modern e-commerce application built with Next.js, designed to showcase and sell perfumes. This project focuses on a clean user interface, robust form handling, and performance optimizations.

## Key Features

*   **Dark Mode Compatibility**: Seamlessly switch between light and dark themes for an enhanced user experience.
*   **Contact Form**: Implemented with `react-hook-form` for efficient form validation and submission.
*   **Image Optimization**: Leverages Next.js's built-in image optimization for faster loading times.
*   **Centralized Theming**: Utilizes Tailwind CSS and a `tokens.ts` file for consistent and easily manageable styling.
*   **Component-Based Architecture**: Organized into reusable React components for maintainability and scalability.

## Project Structure

*   `src/app`: Main application routes and pages.
*   `src/components`: Reusable UI components (e.g., `ContactIntro`, `ContactInfo`, `FormField`).
*   `src/styles`: Global styles and Tailwind CSS configurations.
*   `src/utils`: Utility functions.
*   `tailwind.config.ts`: Tailwind CSS configuration, including custom theme extensions.
*   `next.config.ts`: Next.js configuration.

## Technologies Used

*   **Next.js**: React framework for production.
*   **React**: JavaScript library for building user interfaces.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **TypeScript**: Superset of JavaScript that adds static types.
*   **react-hook-form**: For flexible and extensible forms with easy validation.
*   **Redux Toolkit**: For state management (if applicable, based on `package.json`).
*   **Framer Motion**: For animations (based on `package.json`).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
