import cron from "node-cron";

const deleteLogsEveryDay = () => {
  console.log("job is running");
};

cron.schedule("0 8 * * 1", () => {
  deleteLogsEveryDay();
});

export default cron;
