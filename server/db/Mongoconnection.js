const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://saxenaayush381:uW8F0yvIgmHUTAao@cluster0.oc6osw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected mongodb"))
  .catch((e) => console.log(e));
