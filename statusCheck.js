export default async function handler(req, res) {
  try {
    const response = await fetch("http://46.101.32.52:2005/status");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal cek status", detail: error.toString() });
  }
}
