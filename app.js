const express = require("express");
const app = express();
const router = require("./router/testRouter");
const port = 3000;

// app.use(express.static("static")); // 정적인 파일을 제공하기 위한 역할을 함

app.use(express.static("static"));
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("hello world!!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${3000}`); //app.listen까지 완료해야 페이지가 뜬다.
});

module.exports = app;
