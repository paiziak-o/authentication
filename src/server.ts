import app from "./app";
import * as serverless from "serverless-http";

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};