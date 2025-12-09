export default async function handler(req, res) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const { table, type } = req.query;

  const message = `📣 *Service Anfrage*\n\n🪑 *Tisch:* ${table}\n🔧 *Aktion:* ${type}\n⏰ *Zeit:* ${new Date().toLocaleTimeString()}`;

  const telegramURL = `https://api.telegram.org/bot${8353027423:AAFjTbVtKPXzajNt13KpVyOGdjrWBhW8YCA}/sendMessage`;

  await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: 7225728131,
      text: message,
      parse_mode: "Markdown"
    })
  });

  res.status(200).json({ status: "OK" });
}
