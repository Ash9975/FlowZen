import http from "k6/http";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const payload = JSON.stringify({
    mobile: "9975488932",
    password: "123456",
  });

  const res = http.post(
    "https://flowzen-api-8kwd.onrender.com/api/auth/login",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("STATUS:", res.status);
  console.log("BODY:", res.body);
}