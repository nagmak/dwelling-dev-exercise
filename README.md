## Dwelling Developer Exercise

This is a small credit card balance checker project with a fake backend REST API, built in Next.js with TypeScript.

![Balance Checker App](balance-checker-app.png "Balance Checker App")

## What I would do if I had more time

- Add more unit testing and improve the code coverage
- As a simple budgeting app, adding a total balance would be useful, so they know how much they owe
- Add a full transaction that includes - name of transaction, date/timestamp, amount they owe, card type, card bank, and card number
- Allow users to view their transactions organized by month in the list
- Let users toggle the sort to be ascending or descending by balance
- Add a favourite or pin feature so they can pin important transactions
- Add a search feature so users can find the transaction they are looking for
- Add authentication so users feel safe logging in and using the app to view their transactions
- Add a backend database to save user transactions so the page is populated with a user's information instead of them putting in this value multiple times
- If this were to be a much larger scale budgeting app, I would use the Plaid API to get user transactions instead of a single balance from a Credit Card number they input

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
