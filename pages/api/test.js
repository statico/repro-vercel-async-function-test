export default function handler(req, res) {
  setTimeout(() => {
    console.log("test", new Date().toISOString());
  }, 1000);
  res.status(200).json({ success: new Date().toISOString() });
}
