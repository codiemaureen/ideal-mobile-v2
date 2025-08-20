import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg)$/i;
const natSort = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f)).sort(natSort);
}

export function getPairedBeforeAfterImages() {
  const beforeDir = path.join(process.cwd(), "public/images/Before");
  const afterDir = path.join(process.cwd(), "public/images/After");

  const before = listImages(beforeDir);
  const after = listImages(afterDir);

  const base = (f) => f.replace(/\.[^.]+$/, "").toLowerCase();

  // First, pair by basename match
  const afterMap = new Map(after.map((f) => [base(f), f]));
  const pairs = [];

  for (const bf of before) {
    const key = base(bf);
    const af = afterMap.get(key);
    if (af) {
      pairs.push({
        key,
        before: `/images/Before/${bf}`,
        after: `/images/After/${af}`,
      });
      afterMap.delete(key);
    }
  }

  // Pair remaining by index as a fallback
  const usedBefore = new Set(pairs.map((p) => p.before.split("/").pop()));
  const remBefore = before.filter((f) => !usedBefore.has(f));
  const remAfter = Array.from(afterMap.values());

  const len = Math.max(remBefore.length, remAfter.length);
  for (let i = 0; i < len; i++) {
    const bf = remBefore[i];
    const af = remAfter[i];
    if (bf && af) {
      const key = `${base(bf)}-${base(af)}`;
      pairs.push({
        key,
        before: `/images/Before/${bf}`,
        after: `/images/After/${af}`,
      });
    }
  }

  return pairs;
}
