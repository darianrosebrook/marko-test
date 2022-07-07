# Marko test app

---

Testing out `Marko` from the Ebay team

> Essentially, you should have a single view(page/route), that at a minimum consists of:
>
> -   Header
> -   A Search Bar
> -   Search Results of Cards / Blocks
> -   A Basic footer

---

## What I would love to have done if I had more time

-   Set up propper error handling and empty states
-   More refactoring on code, app structure, and components
-   an actual design for this app
-   better search debouncing and error handling
-   more time to test and debug the marko syntax
-   more time to properly format the API card
-   create more components out of the reusable sections of code
-   be smarter about my styling solution (carried over classes and vars from another project)

## Things that were difficult

-   While i was able to get it up and running, Marko took me for a loop the first almost hour of trying to get the project properly spun up
-   Understanding Marko's lifecycle, parent-child relationship, and how it manages state changes. I have thoughts.
-   I hit my rate limit on the News app while testing the API (I should have thought about that before choosing which one to start with)
-   I had to switch APIs at the end to test that Giphy's API worked okay with the Fetch structure I had in place (thankfully it worked)
-   I apologize, because I think I spent an extra hour over the time I was allowed, but that was due to running into the API issue and having some parenting/child component issues with passing data. I was so close, I didn't want to leave it just then.

```
npx @marko/create marko-app --template basic
cd marko-app
npm install
npm run dev
```

## Overview

This project is powered by `@marko/serve` and `@marko/build`.

-   Run `npm run dev` to start the development server
-   Run `npm run build` to build a production-ready node.js server
-   Run `npm start` to run the production server
