import mongoose from "mongoose";
import db from "../db/connection.js";
import b17Data from "./b17s.json" assert { type: "json" };
import groupData from "./groups.json" assert { type: "json" };
import squadronData from "./squadrons.json" assert { type: "json" };
import B17 from "../models/B17.js";
import Group from "../models/BombGroup.js";
import Squadron from "../models/BombSquadron.js";
import chalk from "chalk";

const insertData = async () => {
  await db.dropDatabase();

  await B17.create(b17Data);
  await Group.create(groupData);
  await Squadron.create(squadronData);

  console.log(chalk.magenta("B17s, Groups, and Squadrons created"));

  await db.close();
};

insertData();
