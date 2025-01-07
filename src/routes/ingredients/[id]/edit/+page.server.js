import db from "$lib/db";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const ingredient = await db.getIngredient(params.id);

  if (!ingredient) {
    throw error(404, `Ingredient with ID ${params.id} not found`);
  }

  return { ingredient };
}

export const actions = {
  update: async ({ request }) => {
    const formData = await request.formData();

    const updatedIngredient = {
      _id: formData.get("id"),
      name: formData.get("name"),
      origin: formData.get("origin"),
      properties: formData.get("properties"),
    };

    const id = await db.updateIngredient(updatedIngredient);

    if (id) {
      throw redirect(303, `/ingredients/${id}`);
    } else {
      return { error: "Failed to update ingredient" };
    }
  },
};
