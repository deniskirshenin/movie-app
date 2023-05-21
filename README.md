# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

This is a Movie App with search and bookmark functionlaity built with Create-React-App. API is provided by TMDB API.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![](./movie-app-screenshot.jpg)

### Links

- Solution URL: https://github.com/deniskirshenin/movie-app
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Started with mobile-first layout built with styled-components
- Connected project to TMDB API and provided cards with info from API
- Added Search functionality based on API query
- Added Bookmark functionality with Context API and useReducer
- Improved API calls using useSWR

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Learned how to organise mobile-first and component-driven workflow while developing web app.
As well it was my first React project. Learned basic React concepts and CSS-in-JS tool - Styled-Components for styling.
Got familiar with API calls with Axios, learned basics of state management and Context API.

### Continued development
Add Footer.
Resolve bug with search bar.
Planning to move project to Next.js and TypeScript. Add state management tool like Redux.
Learn more about improving perfomance.
Reorganise components and implement Storybook.
Add features like opening full screen movie card.
Add tests for components.

### Useful resources

- https://www.smashingmagazine.com/2020/06/introduction-swr-react-hooks-remote-data-fetching/ - This helped me with understading how to fetch data and something about custom hooks. Very useful article.
- https://react.dev/learn/managing-state - Great tutorial from React team on State management.
- https://swr.vercel.app/docs/pagination#advanced-features - Amazing article about pagination using SWR from Vercel team.
## Author

I am junior frontend developer looking for full-time job opportunity

- Frontend Mentor - [@deniskirshenin](https://www.frontendmentor.io/profile/deniskirshenin)
- LinkedIn - [@deniskirshenin](https://www.linkedin.com/in/deniskirshenin/)
