import db from "$lib/db";

export async function load() {
  const ingredients = await db.getIngredients();
  return { ingredients };
}
