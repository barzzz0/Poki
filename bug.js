export default async function handler(req, res) {
  const { type, chatId } = req.query;

  if (!type || !chatId) {
    return res.status(400).json({ error: "Missing type or chatId" });
  }

  try {
    const response = await fetch(`http://46.101.32.52:2005/ptevolution?type=${type}&chatId=${encodeURIComponent(chatId)}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal menghubungi server eksternal", detail: err.message });
  }
}
