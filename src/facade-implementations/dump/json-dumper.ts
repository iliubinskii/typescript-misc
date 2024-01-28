import type { dump } from "../../facades";
import { json } from "../../functions";

export const jsonDumper: dump.Facade = json.encode;
