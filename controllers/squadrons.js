import Squadron from "../models/BombSquadron.js";

export const getSquadrons = async (request, response) => {
  try {
    const squadrons = await Squadron.find();
    response.json(squadrons);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const getSquadron = async (request, response) => {
  try {
    const { id } = request.params;
    const squadron = await Squadron.findById(id);
    if (squadron) {
      return response.json(squadron);
    }
    response.status(404).json({ message: "Squadron not found" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const createSquadron = async (request, response) => {
  try {
    const squadron = new Squadron(request.body);
    await squadron.save();
    response.status(201).json(squadron);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateSquadron = async (request, response) => {
  try {
    const { id } = request.params;
    const squadron = await Squadron.findByIdAndUpdate(id, request.body);
    response.status(201).json(squadron);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteSquadron = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Squadron.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Bomb squadron deleted");
    }
    throw new Error("Bomb squadron not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
