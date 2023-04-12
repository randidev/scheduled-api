const BirthdayEmail = require("./src/jobs/birthdayEmail/index");
const initApp = require("./index");
var cron = require("node-cron");

const app = initApp();
// Start server

// run BirthdayEmail job each hour
cron.schedule("0 0 * * * *", async () => {
  await BirthdayEmail();
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
