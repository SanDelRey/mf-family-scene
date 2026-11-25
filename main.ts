import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 280 // gate: 1..280 characters
const ENTRY = "Dad asks the speaker for something from his youth. It plays a 1994 dial-up tone. Mom laughs so hard she drops the spoon, and the speaker says, quietly: \"I'll take that as a request.\""

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
if (ENTRY.length < 1 || ENTRY.length > LIMIT) throw new RangeError("entry length " + ENTRY.length)
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8")
