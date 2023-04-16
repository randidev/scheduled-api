## Getting Started

First, install the dependencies:

```bash
npm run install
# or
yarn install
# or
pnpm install
```

Then, run the development server (Before run the application, you need to run your local MongoDB server or connect it to MongoDB cloud server by changing the `MONGDB_URI` variable in `.env` file):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

If this process takes too long then you might need to build the application first:

```bash
npm run build
# or
yarn build
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

---

API Documentation [https://documenter.getpostman.com/view/20158124/2s93XyU3Nw](https://documenter.getpostman.com/view/20158124/2s93XyU3Nw)

---

Flow:

- To send the message to user, this application will run the cron-job every hour and will check
  - if current date is a birth day for any user
    - then it will also check if current hour is 9am for the particular user based on their timezone, then it will send the message
