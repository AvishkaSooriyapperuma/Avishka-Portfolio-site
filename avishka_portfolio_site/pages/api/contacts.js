import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "AvishkaSooriyapperuma",
        link: "https://github.com/AvishkaSooriyapperuma",
      },
      {
        medium: "email",
        username: "mail@avishka.me",
        link: "mailto:avishkadilshan400@gmail.com",
      },
      {
        medium: "facebook",
        username: "Avishka Dilshan",
        link: "https://www.facebook.com/avishka.dilshan.9615",
      },
      {
        medium: "linkedin",
        username: "AvishkaSooriyapperuma",
        link: "https://www.linkedin.com/in/avishkasoori/",
      },
      {
        medium: "Dev Community",
        username: "AvishkaSooriyapperuma",
        link: "https://dev.to/avishkasooriyapperuma",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
