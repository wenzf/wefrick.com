import arc from "@architect/functions";
import invariant from "tiny-invariant";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export async function uploadUsco(payload: {pk: string, grid: number[][]}) {
    const db = await arc.tables();
    const result = await db.gridb.put(payload);
    return result
}

export async function getUscoItem(pk: string) {
    const db = await arc.tables();
    const result = await db.gridb.get({ pk });
    return result
}