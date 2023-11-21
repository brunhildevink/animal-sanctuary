# Technical Documentation for Animal Sanctuary App

## Overview

The Animal Sanctuary App is designed to facilitate the adoption process by matching animals with potential adopters based on various criteria. The application has two main environments: an administration view `/overview` for workers to manage entries, and a match-making view `/adoptions` for finding suitable matches between animals and adopters.

## Challenges Faced

Initially, the idea was to implement a server-side application with dummy database data. However, I later realized that a completely server-side application couldn't access the file system. Therefore the decision was made to create a client-side component for adding new animals. Although new cards render successfully, they don't persist in the DOM after rerouting and unfortunately no matchmaking.

## Data Transformation in Utils

Inside the utils folder, data transformation takes place. The getMatchingAnimals function is responsible for matchmaking and calls calculateMatchScore. This function considers several factors for matchmakings:

- The favorite animal of the adopter and the kind of animal.
- The age of the adopter and the personality; for example, if the adopter is a senior and the personality is "active," the score decreases.
- If the adopter has kids and the animal's personality is "unsociable," the score decreases.
- The returned score is encapsulated in a new object containing both the adopter and the score. If there is no match (i.e., length is zero), the process skips to the next iteration.

## Sorting Method

The sorting method evaluates the scores, giving priority to higher scores. In case of tied scores, the registration date is considered. The adopter with the longest registration date is selected. Finally, the matched adopter is removed from the list to prevent assigning the adoptee to multiple animals.

Considerations for Future Improvement

Given the time constraints, the initial plan to use useContext for better state management was reconsidered. Future improvements could involve implementing a more centralized state management system for better data flow and persistence.

## (Code) Styling, and linting

The Animal Sanctuary App is crafted with TypeScript for a robust codebase. We streamlined styling using Tailwind CSS, with the help of DaisyUI components for a visually appealing design. For code cleanliness, ESLint with Airbnb rules ensures consistency, while Prettier maintains a standardized format. Husky was set up for pre-commit hooks, and Jest tests utilities, running automatically before each push. I chose to only test the utilities, because of time constraints.


## Getting Started

First, run the server:

```bash
npm run server
```

Next, run the frontend:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




