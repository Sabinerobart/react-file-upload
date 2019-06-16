const nodemailer = require("nodemailer");

app.post("/askForCookiesRecipe", (req, res) => {
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f1b80fb5967bef",
      pass: "5a7571368a136e"
    }
  });

  transport.sendMail({
    from: '"Test Server" <test@example.com>',
    to: req.body.email,
    subject: "Cookies",
    text: "Allez Mamy, balance ta recette de cookies !",
    html: "<h2>Allez Mamy, balance ta recette de cookies !</h2>"
  });
});
