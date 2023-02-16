import perpDataRetrievalUtils from "../../../lib/perpDataRetrievalUtils";
//https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  const randomPerp = await perpDataRetrievalUtils.getRandomPerp();

  if (!randomPerp) {
    res.status(400).json({ perps: "NO PERPS FOUND" });
    return;
  }

  if (req.method === "GET") {
    res.status(200).json(randomPerp);
  } else if (req.method === "POST") {
  } else if (req.method === "PUT") {
  }
}
