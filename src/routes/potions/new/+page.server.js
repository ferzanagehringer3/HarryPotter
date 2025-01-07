import db from "$lib/db";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const potion = {
      name: formData.get("name"),
      image: "/images/placeholder.png", // Standardbild direkt setzen
      ingredients: formData.get("ingredients").split(",").map((i) => i.trim()),
      duration: formData.get("duration"),
      origin: formData.get("origin"),
      brewing_instructions: formData.get("brewing_instructions"),
    };

    const id = await db.createPotion(potion);

    if (id) {
      throw redirect(303, `/potions/${id}`);
    } else {
      return { error: "Failed to create potion" };
    }
  }
};
