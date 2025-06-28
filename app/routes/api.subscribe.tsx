import type { Route } from "./+types/api.subscribe";
import { Emails } from "app/modules/emails";

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    await Emails.Contacts.create({ email });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
