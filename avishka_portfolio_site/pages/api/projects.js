import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "TechnoShpere",
        description:
          "A website that has created for an  Open Source event which was hosted by the FOSS Community chapter of NSBM Green  University.",
        stack: ["Typescript", "vite", "Netlify"],
        link: "https://technosphere.fossnsbm.org/",
        image: "ndss.png",
        largeImage: "Technosphere.png",
      },

    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
