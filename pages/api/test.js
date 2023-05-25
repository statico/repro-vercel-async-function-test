export default function handler(req, res) {
  setTimeout(() => {
    fetch("https://ca43-70-252-16-66.ngrok-free.app")
      .then((res) => res.text())
      .then((text) => console.log(text));
    console.log("test", new Date().toISOString());
  }, 1000);

  res.status(200).json({ success: new Date().toISOString() });
}
