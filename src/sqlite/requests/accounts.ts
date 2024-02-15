import { accounts } from "../../../db/schema";
import { db } from "../DrizzleDB";

export const getAccounts = async () => {
  return await db.select().from(accounts);
};

export const postAccount = async (name: string) => {
  return await db.insert(accounts).values({ name });
};
