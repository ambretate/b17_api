import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BombSquadronSchema = new Schema({
  squadronName: String,
  serialNumber: [{ type: Schema.Types.serialNumber, ref: "b17s" }],
});

let Squadron = mongoose.model("squadrons", BombSquadronSchema);

export default Squadron;
