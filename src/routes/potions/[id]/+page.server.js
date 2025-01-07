import db from "$lib/db";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
  const potion = await db.getPotion(params.id);

  if (!potion) {
    throw error(404, `Potion with ID ${params.id} not found`);
  }

  return { potion };
}

export const actions = {
  update: async ({ request }) => {
    const formData = await request.formData();
    const updatedPotion = {
      _id: formData.get("id"),
      name: formData.get("name"),
      image: formData.get("image") || "/images/placeholder.png",
      ingredients: formData.get("ingredients").split(",").map((i) => i.trim()),
      duration: formData.get("duration"),
      origin: formData.get("origin"),
      brewing_instructions: formData.get("brewing_instructions"),
    };

    const id = await db.updatePotion(updatedPotion);

    if (id) {
      throw redirect(303, `/potions/${id}`); // Zurück zur Detailseite
    } else {
      return { error: "Failed to update potion" };
    }
  },

  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");

    await db.deletePotion(id); // Potion aus der Datenbank löschen
    throw redirect(303, "/potions"); // Zurück zur Potions-Liste
  },
};
