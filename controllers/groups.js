import Group from "../models/BombSquadron.js";

export const getGroups = async (request, response) => {
  try {
    const groups = await Group.find();
    response.json(groups);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const getGroup = async (request, response) => {
  try {
    const { id } = request.params;
    const group = await Group.findById(id);
    if (group) {
      return response.json(group);
    }
    response.status(404).json({ message: "Bomb group not found" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const createGroup = async (request, response) => {
  try {
    const group = new Group(request.body);
    await group.save();
    response.status(201).json(group);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateGroup = async (request, response) => {
  try {
    const { id } = request.params;
    const group = await Group.findByIdAndUpdate(id, request.body);
    response.status(201).json(group);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteGroup = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Group.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Bomb group deleted");
    }
    throw new Error("Bomb group not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
