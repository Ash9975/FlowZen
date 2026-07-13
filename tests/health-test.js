import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const res = http.get("https://flowzen-api-8kwd.onrender.com/api/health");

  console.log("Status:", res.status);
  console.log("Body:", res.body);

  sleep(1);
}