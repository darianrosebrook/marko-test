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

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/pages` with `.marko` files. Learn more in the [`@marko/serve` docs](https://github.com/marko-js/cli/blob/master/packages/serve/README.md).
