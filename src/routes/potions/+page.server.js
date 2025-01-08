import db from "$lib/db";
import { redirect } from "@sveltejs/kit";

export async function load() {
  const potions = await db.getPotions();
  return { potions };
}

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const potion = {
      name: formData.get("name"),
      image: formData.get("image"),
      ingredients: formData.get("ingredients").split(",").map((i) => i.trim()),
      duration: formData.get("duration"),
      origin: formData.get("origin"),
      brewing_instructions: formData.get("brewing_instructions")
    };

    const id = await db.createPotion(potion);

    if (id) {
      return { success: true, id }; 
    } else {
      return { error: "Failed to create potion" };
    }
  }
};
