import { FormData } from "@/components/plop-anywhere/Contact";

export function sendEmail(data: FormData) {
  const endpoint = "/api/email";

  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      // this console is fine
      // eslint-disable-next-line
      console.info(response.message);
    })
    .catch((err) => {
      console.error(`Failed to send message: ${err}`);
    });
}
