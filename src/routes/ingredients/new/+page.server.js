import db from "$lib/db";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const newIngredient = {
      name: formData.get("name"),
      origin: formData.get("origin"),
      rarity: formData.get("rarity"),
    };

    const id = await db.createIngredient(newIngredient);

    if (id) {
      throw redirect(303, `/ingredients/${id}`);
    } else {
      return { error: "Failed to create ingredient" };
    }
  },
};
