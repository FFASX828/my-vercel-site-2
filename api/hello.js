export default function handler(req, res) {
  res.status(200).json({
    message: "Image API working",
    imageUrl: "https://i.imgur.com/qF34ZFa.jpeg",
    timestamp: new Date().toISOString()
  });
}

