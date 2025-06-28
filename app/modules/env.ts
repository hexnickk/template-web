import { z } from "zod";

const envSchema = z.object({
  HOST_URL: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_AUDIENCE_ID: z.string(),
});

export namespace Env {
  const env = envSchema.partial().parse(process.env) as z.infer<
    typeof envSchema
  >;

  const validation = envSchema.safeParse(process.env);
  if (!validation.success) {
    console.warn("⚠️  Missing environment variables:");
    validation.error.issues.forEach((issue) => {
      console.warn(`   - ${issue.path[0]}: ${issue.message}`);
    });
  }

  export const HOST_URL = env.HOST_URL;
  export const RESEND_API_KEY = env.RESEND_API_KEY;
  export const RESEND_AUDIENCE_ID = env.RESEND_AUDIENCE_ID;
}
