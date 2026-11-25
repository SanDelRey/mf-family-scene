import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 280 // gate: 1..280 characters
const ENTRY = "Dad asks the speaker for something from his youth. It plays a 1994 dial-up tone. Mom laughs so hard she drops the spoon, and the speaker says, quietly: \"I'll take that as a request.\""

function gate(text: string): string {
  if (text.trim().length < 1 || text.length > LIMIT) throw new RangeError("entry length " + text.length)
  return text
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), gate(ENTRY), "utf8")
