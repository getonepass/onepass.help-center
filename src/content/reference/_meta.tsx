import type { MetaRecord } from "nextra";
import { Badge } from "@/components/ui/badge";
import { faCirclesOverlap } from "@fortawesome/pro-light-svg-icons";
import {
  faArrowsToDot,
  faFingerprint,
  faHexagonNodes,
  faSquareDashed,
  faVault,
  faSquareRing as lightSquareRing,
} from "@fortawesome/pro-regular-svg-icons";

import { faSquareRing } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Search } from "nextra/components";
export default {
  /*search: {
    title: <Search />,
    type: "separator",
  },
  */
  "--": {
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareDashed}
          size="1x"
          width="16"
          style={{ marginRight: ".6em" }}
        />
        Reference
      </h1>
    ),
    type: "separator",
  },
  articles: {
    title: (
        <h1 className="flex items-center">
          <FontAwesomeIcon
            icon={faSquareDashed}
            size="1x"
            width="16"
            style={{ marginRight: ".6em" }}
          />
          Articles
        </h1>
    ),
    href: "/reference/articles",
  },
  guides: "Guides"
} satisfies MetaRecord;
