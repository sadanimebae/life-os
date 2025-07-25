// utils/useDropLink.ts
import { useState } from "react";

export function useDropLink() {
  const [dropLinks, setDropLinks] = useState<{ drop: string; platform: string; linked: string[] }[]>([]);

  const linkToPlatform = (drop: string, platform: string, item: string) => {
    const existing = dropLinks.find((d) => d.drop === drop && d.platform === platform);
    if (existing) {
      existing.linked.push(item);
      setDropLinks([...dropLinks]);
    } else {
      setDropLinks([...dropLinks, { drop, platform, linked: [item] }]);
    }
  };

  return { dropLinks, linkToPlatform };
}
