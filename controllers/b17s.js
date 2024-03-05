import B17 from "../models/B17.js";

export const getB17s = async (request, response) => {
  try {
    const b17s = await B17.find();
    response.json(b17s);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const getB17 = async (request, response) => {
  try {
    const { id } = request.params;
    const b17 = await B17.findById(id);
    if (b17) {
      return response.json(b17);
    }
    response.status(404).json({ message: "B17 not found" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const createB17 = async (request, response) => {
  try {
    const b17 = new B17(request.body);
    await b17.save();
    response.status(201).json(b17);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateB17 = async (request, response) => {
  try {
    const { id } = request.params;
    const b17 = await B17.findByIdAndUpdate(id, request.body);
    response.status(201).json(b17);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteB17 = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await B17.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("B17 deleted");
    }
    throw new Error("B17 not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
