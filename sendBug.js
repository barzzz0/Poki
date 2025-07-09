export default async function handler(req, res) {
  const { type, chatId } = req.query;
  try {
    const response = await fetch(`http://46.101.32.52:2005/ptevolution?type=${type}&chatId=${chatId}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal fetch ke IP bug", detail: error.toString() });
  }
}
