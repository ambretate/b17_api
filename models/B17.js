import mongoose from "mongoose";
const Schema = mongoose.Schema;

const B17Schema = new Schema ({
  "serialNumber": String,
  "name": String,
  "productionBlock": {
    "model": String,
    "serialNumberRange": String,
  },
  "bombGroup": [String],
  "bombSquadron": [String],
  "manufacturer": String,
  "fate": String,
  "image": String,
});

let B17 = mongoose.model("b17s", B17Schema);

export default B17;
