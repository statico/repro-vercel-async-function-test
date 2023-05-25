export default function handler(req, res) {
  const n = Number(req.query.n);
  setTimeout(() => {
    fetch(`http://lemon.langworth.com:2222/${n}`)
      .then((res) => res.text())
      .then((text) => console.log(text))
      .catch((err) => console.log(err));
    console.log(`got ${n}`);
  }, 1000);

  res.status(200).json({ success: new Date().toISOString() });
}
