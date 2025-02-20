import axios from "axios";
import { missingValue } from "./error";
import { DecisionDTO } from "dbsder-api-types";

if (process.env.DBSDER_API_URL == null)
  throw missingValue("process.env.DBSDER_API_URL", new Error());
if (process.env.DBSDER_API_KEY == null)
  throw missingValue("process.env.DBSDER_API_KEY", new Error());

const { DBSDER_API_URL, DBSDER_API_KEY } = process.env;

export function sendToDb(decision: DecisionDTO) {
  return axios.post(DBSDER_API_URL, decision);
}
