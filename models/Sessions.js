let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let sessionSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "Users", index: true},
    created_at: Date,
    updated_at: Date,
    expires_in: Date,
});

db = mongoose.createConnection("mongodb://localhost/todo_list", {MongoClient: true});
session = db.model("Session", sessionSchema);
module.exports = session;