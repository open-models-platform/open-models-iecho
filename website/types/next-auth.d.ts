import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's role. */
      role: string;
      /** True when the user is new. */
      isNew: boolean;
      /** Iso timestamp of the user's acceptance of the terms of service */
      tosAcceptanceDate?: string;
    } & DefaultSession["user"];

    inference: {
      isAuthenticated: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    role: string;
    /** True when the user is new. */
    isNew?: boolean;

    sub: string;

    /** id of user in the data backend */
    backendUserId?: string;
    /** Iso timestamp of the user's acceptance of the terms of service */
    tosAcceptanceDate: string | null;
  }
}
