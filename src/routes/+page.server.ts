import type { Load } from "@sveltejs/kit";
import Hello from '$lib/components/Hello.svelte';
import { renderToString } from "$lib/componentUtil";

export const load: Load = async () => {
  const stringValue = renderToString(Hello, { name: "Jeroen" });
  return { stringValue }
};