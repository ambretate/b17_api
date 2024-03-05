import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BombGroupSchema = new Schema({
  serialNumber: [{ type: Schema.Types.serialNumber, ref: "b17s" }],
});

let Group = mongoose.model("groups", BombGroupSchema);

export default Group;
