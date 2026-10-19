# Gurinder Meelu’s Portfolio

A personal portfolio site built with React and Next.js.

## Pages

The site has five pages: Home, About, Projects, Skills, and Contact.

## Features

- A shared navigation bar and footer
- A responsive layout with the current page highlighted in the navigation
- A reusable page-title component that uses props and the Effect hook
- A contact form with controlled inputs and browser validation
- A confirmation screen for the demo form (it doesn’t send or save messages)

## Project structure

The project uses the Next.js App Router structure:

- `app/` contains the route folders, root layout, and global stylesheet.
- `app/components/` contains shared UI components.
- `public/` contains the portfolio's illustrative placeholder images.

The navigation uses the `usePathname` hook to highlight the current page.


When you want to check the production build, run `npm run build`.

## Live website

The site deployed Render link 

