import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BombGroupSchema = new Schema ({
  "groupName": String,
  "bombSquadron": [String],
});

let Group = mongoose.model("groups", BombGroupSchema);

export default Group;