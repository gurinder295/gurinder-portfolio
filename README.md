# Gurinder Meelu’s Portfolio

A small portfolio site I built with React and Next.js for COMP2112 Assignment 1.

## Pages

The site has five pages: Home, About, Projects, Skills, and Contact.

## Features

- A shared navigation bar and footer
- A responsive layout with the current page highlighted in the navigation
- A reusable page-title component that uses props and the Effect hook
- A contact form with controlled inputs and browser validation
- A confirmation screen for the demo form (it doesn’t send or save messages)

## Project structure

The project uses the Next.js App Router structure we used in class:

- `app/` contains the route folders, root layout, and global stylesheet.
- `app/components/` contains shared UI components.
- `public/` contains the portfolio's illustrative placeholder images.

The navigation uses the `usePathname` hook to highlight the current page. The Skills page also mentions class topics such as Context, form validation, and rich-text editing. They’re included as things I’ve studied, not as claims that every topic is part of this portfolio.


When you want to check the production build, run `npm run build`.

## Live website

The site deployed Render link 

## Before submitting

Before handing it in, I’ll swap the profile illustration for a recent photo and add screenshots of my projects. I’ll also check that the content feels like me and cite any outside code if required. The current project images are illustrations, not screenshots of finished work.
