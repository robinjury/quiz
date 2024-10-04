import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { weeklyQuestion } from "./functions/weekly-question/resource";

defineBackend({
  auth,
  data,
  weeklyQuestion,
});
