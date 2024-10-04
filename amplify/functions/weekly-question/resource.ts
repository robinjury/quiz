import { defineFunction } from "@aws-amplify/backend";

export const weeklyQuestion = defineFunction({
  name: "weekly-question",
  schedule: "every week",
});
