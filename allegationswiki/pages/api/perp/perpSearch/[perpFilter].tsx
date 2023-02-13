import perpDataRetrievalUtils from "../../../../lib/perpDataRetrievalUtils";
//https://nextjs.org/docs/api-routes/introduction






export default async function handler(
  req,
  res
) {
  // get or edit data for the request project id
  const { perpFilter } = req.query;
  if (typeof perpFilter !== "string") {
    res.status(400).json(
        {perps: 'INVALID REQUEST'
    });
    return;
  }

  const filteredPerps = await perpDataRetrievalUtils.getPerpsFiltered(perpFilter);

  if (!filteredPerps) {
    res.status(400).json({ perps: "NO PERPS FOUND" });
    return;
  }

  if (req.method === "GET") {

    res.status(200).json(filteredPerps);
  } else if (req.method === "POST") {
  } else if (req.method === "PUT") {
  }
}
