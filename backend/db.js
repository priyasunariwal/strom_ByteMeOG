const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(
             `mongodb+srv://priya:priya@cluster0.ywgiizu.mongodb.net/mongodb?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
//`mongodb+srv://priyaaa:${encodeURIComponent("priyaaa")}@cluster0.mgy5wwq.mongodb.net/mongodb?retryWrites=true&w=majority`
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

module.exports = connectMongo;


