const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using same connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO,{ useNewUrlParser: true, useUnifiedTopology: true })

    connection.isConnected = db.connections[0]?.readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

