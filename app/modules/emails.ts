import { Resend } from "resend";
import { Env } from "./env";

export namespace Emails {
  const resend = new Resend(Env.RESEND_API_KEY);

  export namespace Contacts {
    export async function create({ email }: { email: string }) {
      const response = await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: Env.RESEND_AUDIENCE_ID,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    }
  }
}
