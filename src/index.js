const app = require("./app");

const PORT = 3002;
var server = app.listen(PORT, function() {
    var port = server.address().port

    console.log("The application runs on the port %s", port)
})