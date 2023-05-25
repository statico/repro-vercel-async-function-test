export default function handler(req, res) {
  const n = Number(req.query.n);
  setTimeout(() => {
    fetch(`https://ca43-70-252-16-66.ngrok-free.app/${n}`)
      .then((res) => res.text())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));
    console.log("test", new Date().toISOString());
  }, 1000);

  res.status(200).json({ success: new Date().toISOString() });
}
