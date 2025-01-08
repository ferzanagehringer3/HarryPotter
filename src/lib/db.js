import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("HarryPotterDB"); // select database

//////////////////////////////////////////
// Potions
//////////////////////////////////////////

// Get all potions
async function getPotions() {
  let potions = [];
  try {
    const collection = db.collection("potions");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    potions = await collection.find(query).toArray();
    potions.forEach((potion) => {
      potion._id = potion._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return potions;
}

// Get potion by id
async function getPotion(id) {
  try {
    const collection = db.collection("potions");
    const potion = await collection.findOne({ _id: new ObjectId(id) });

    if (potion) {
      potion._id = potion._id.toString();

      // Zutaten laden und IDs zu Strings konvertieren
      const ingredientCollection = db.collection("ingredients");
      potion.ingredients_details = await ingredientCollection
        .find({ used_in: potion._id })
        .toArray();

      potion.ingredients_details.forEach((ingredient) => {
        ingredient._id = ingredient._id.toString(); // ObjectId zu String konvertieren
      });
    }

    return potion;
  } catch (error) {
    console.error("Error fetching potion:", error.message);
    return null;
  }
}



// create potion
async function createPotion(potion) {
  potion.poster = "/images/placeholder.jpg"; // default poster
  potion.ingrediants = [];
  potion.list = false;
  try {
    const collection = db.collection("potions");
    const result = await collection.insertOne(potion);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}



// update potion
async function updatePotion(potion) {
  try {
    let id = potion._id;
    delete potion._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("potions");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: potion });

    if (result.matchedCount === 0) {
      console.log("No potion with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Potion with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete potion by id
async function deletePotion(id) {
  try {
    const collection = db.collection("potions");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No potion with id " + id);
    } else {
      console.log("Potion with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// Get instructions by potion
async function getInstructions(id) {
  try {
    const collection = db.collection("instructions");
    const query = { _id: new ObjectId(id) }; // Suche basierend auf der ObjectId
    const instructions = await collection.findOne(query);
    return instructions;
  } catch (error) {
    console.error("Error fetching instructions by ID:", error);
    return null;
  }
}


async function getIngredients() {
  try {
    const collection = db.collection("ingredients");
    const ingredients = await collection.find({}).toArray();

    // Konvertiere alle _id zu Strings
    ingredients.forEach((ingredient) => {
      ingredient._id = ingredient._id.toString();
    });

    return ingredients;
  } catch (error) {
    console.error("Error fetching ingredients:", error.message);
    return [];
  }
}


async function getPotionsByIngredient(ingredientId) {
  try {
    const collection = db.collection("potions");
    const potions = await collection
      .find({ ingredients: ingredientId })
      .toArray();
    potions.forEach((potion) => {
      potion._id = potion._id.toString();
    });
    return potions;
  } catch (error) {
    console.error("Error fetching potions by ingredient:", error.message);
    return [];
  }
}


async function getIngredient(id) {
  try {
    const collection = db.collection("ingredients");
    const ingredient = await collection.findOne({ _id: new ObjectId(id) });
    if (ingredient) {
      ingredient._id = ingredient._id.toString(); // Konvertiere ObjectId zu String
    }
    return ingredient;
  } catch (error) {
    console.error("Error fetching ingredient:", error.message);
    return null;
  }
}

async function createIngredient(ingredient) {
  try {
    const collection = db.collection("ingredients");
    const result = await collection.insertOne(ingredient);
    return result.insertedId.toString(); // Gibt die ID des neuen Ingredients zurück
  } catch (error) {
    console.error("Error creating ingredient:", error);
    return null;
  }
}

async function deleteIngredient(id) {
  try {
    const collection = db.collection("ingredients");
    const query = { _id: new ObjectId(id) }; // Suche basierend auf der ObjectId
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log(`No ingredient with ID ${id} found.`);
      return null;
    } else {
      console.log(`Ingredient with ID ${id} has been successfully deleted.`);
      return id;
    }
  } catch (error) {
    console.error("Error deleting ingredient:", error);
    return null;
  }
}

async function updateIngredient(ingredient) {
  try {
    const id = ingredient._id;
    delete ingredient._id; // ObjectId kann nicht aktualisiert werden
    const collection = db.collection("ingredients");
    const query = { _id: new ObjectId(id) };
    const update = { $set: ingredient };

    const result = await collection.updateOne(query, update);

    if (result.matchedCount === 0) {
      console.log(`No ingredient with ID ${id} found.`);
      return null;
    }
    console.log(`Ingredient with ID ${id} updated.`);
    return id;
  } catch (error) {
    console.error("Error updating ingredient:", error);
    return null;
  }
}

async function getPotionsByIds(ids) {
  try {
    const collection = db.collection("potions");
    const objectIds = ids.map((id) => new ObjectId(id));
    const potions = await collection.find({ _id: { $in: objectIds } }).toArray();

    potions.forEach((potion) => {
      potion._id = potion._id.toString(); // ObjectId zu String konvertieren
    });

    return potions;
  } catch (error) {
    console.error("Error fetching potions by IDs:", error);
    return [];
  }
}



// export all functions so that they can be used in other files
export default {
  getPotions,
  getPotion,
  createPotion,
  updatePotion,
  deletePotion,
  getInstructions,
  getIngredients,
  getPotionsByIngredient,
  getIngredient,
  createIngredient,
  deleteIngredient,
  updateIngredient,
  getPotionsByIds,
};
