import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BombSquadronSchema = new Schema({
  bombGroup: [String],
});

let Squadron = mongoose.model("squadrons", BombSquadronSchema);

export default Squadron;
