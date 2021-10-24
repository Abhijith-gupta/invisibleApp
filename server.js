function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("http://" + req.get("host") + req.url);
  }
  next();
}

const express = require("express");
const app = express();

// app.use(requireHTTPS);
app.use(express.static("./dist/InvisibleProject"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/InvisibleProject/" })
);

// app.listen(process.env.PORT || 8080);

// app.listen(3000, function () {
//   console.log("Calling app.listen's callback function.");
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log("Example app listening at http://%s:%s", host, port);
// });

app.listen(8080, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 8080);
})