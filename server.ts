const BirthdayEmail = require("./src/jobs/birthdayEmail/index");
const app = require("./index");
var cron = require("node-cron");

// run BirthdayEmail job each hour
cron.schedule("0 0 * * * *", async () => {
  await BirthdayEmail();
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
