## Planning

I started by researching the suggested API to find out:

- The data format & content tha I would be displaying to the user
- Potential strengths & weaknesses
  - limit of 100 requests per day on the free tier - use hard coded data to save on requests during build, styling and testing phases
  - Very quick performance - dynamic componentry will work well
  - Lots of potential query and search configuration available
  - Simple data structure making it easy to access and display content

I drew up a Most Lovable Product (MLP) list of features and then cut this down into something more realistic with the given time constraints to an Minimum Viable Product (MVP) feature list.

---

MLP features:

- Header
  - Title
  - Preferences menu:
    - Article language selector
    - Region selector
  - Dark mode toggle
- Body components
  - Search
    - Search input for keyword search
    - Generate article list by topic
    - Sort article by most relevant or most recent
    - Date selectors to set time period to search within
  - Article list
    - Article card
    - Image resource of publisher icons/ logos to display for common news outlets
  - Reader later list - section to save your favourite articles

---

MVP features:

- Header
  - Title
- Body components

  - Search
    - Search input for keyword search
    - Generate article list by topic
  - Article list

    - Article card

---

## Build Process

I focussed on getting a basic card component displaying some initial text content and a search input that would re-render the list of cards on submit. At the start I kept all the of the functionality at the App level but once I had a working MVP version, I began the process of refactoring the code:

- Created a custom hook for the data fetching
  - Easier stack tracing for bugs
  - Requests made by changing one App level state
- Reduced amount of code and functionality at the App level by keeping state at sub-component level
- Added error handling to deal with the free tier request limit & other fetch request errors

## Testing

I used Cypress to build an End-to-End testing suite that covered the main user flows ensuring confidence that the relevant results were being rendered for the search input. An important part of this was intercepting the API calls to check the expected calls were being made.

---

**Deployed News app can be accessed:** https://news-app-w1llb.vercel.app/

---

## **Getting started**

1. Clone this repository
2. Install all the relevant dependencies:

```bash
  npm i
```

4. Sign up for an account at https://gnews.io/ to get an API Key

5. Create a .env file at root level and store the API Key as:

```bash
  REACT_APP_API_KEY=[APIKey]
```

6. Start using the app:

```bash
  npm start
```

6. Run the Cypress E2E testing suite (with the React App running in a separate terminal) with:

```bash
  npm run cypress:open
```
