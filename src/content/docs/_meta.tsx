import type { MetaRecord } from 'nextra'
import { Badge } from '@/components/ui/badge'
import { faCirclesOverlap } from '@fortawesome/pro-light-svg-icons'
import {
  faArrowsToDot,
  faFingerprint,
  faHexagonNodes,
  faSquareDashed,
  faVault,
  faSquareRing as lightSquareRing,
} from '@fortawesome/pro-regular-svg-icons'

import { faSquareRing } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  index: 'Introduction',
  'onepass-ecosystem': 'OnePass Ecosystem Overview',
  '-': {
    type: 'separator',
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareDashed}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        Getting Started
      </h1>
    ),
  },
  'what-is-onepass': {
    title: 'What is OnePass?',
    href: '/docs/getting-started/what-is-onepass',
  },
  'who-is-onepass-for': {
    title: 'Who is OnePass for?',
    href: '/docs/getting-started/who-is-onepass-for',
  },
  'how-to-sign-up': {
    title: 'How to sign up',
    href: '/docs/getting-started/how-to-sign-up',
  },
  'navigating-onepass-platform': {
    title: 'Navigating OnePass Platform',
    href: '/docs/getting-started/navigating-onepass-platform',
  },
  '--': {
    type: 'separator',
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareDashed}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Platform
      </h1>
    ),
  },
  'onepass-platform': {
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareDashed}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Platform
      </h1>
    ),
  },
  '---': {
    type: 'separator',
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareDashed}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        Products
      </h1>
    ),
  },
  'onepass-hub': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faArrowsToDot}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass HUB
      </span>
    ),
  },
  'onepass-bridge': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faCirclesOverlap}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Bridge
      </span>
    ),
  },
  'onepass-pipeline': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faSquareRing}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Pipeline
        <Badge variant="secondary" style={{ marginLeft: '.5em' }}>
          Soon
        </Badge>
      </span>
    ),
  },
  'onepass-launchpad': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={lightSquareRing}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Launchpad
      </span>
    ),
  },
  'onepass-datarooms': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faVault}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass DataRooms
        <Badge style={{ marginLeft: '.5em' }}>Soon</Badge>
      </span>
    ),
  },
  'onepass-credentials': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faFingerprint}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        OnePass Credentials
      </span>
    ),
  },
  '----': {
    type: 'separator',
    title: (
      <h1 className="flex items-center">
        <FontAwesomeIcon
          icon={faHexagonNodes}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        Bridge Network
      </h1>
    ),
  },
  'onepass-bridge-trust-network': {
    title: (
      <span className="flex items-center">
        <FontAwesomeIcon
          icon={faHexagonNodes}
          size="1x"
          width="16"
          style={{ marginRight: '.6em' }}
        />
        Bridge Network
      </span>
    ),
  },
  '-----': {
    type: 'separator',
    title: <h1>More</h1>,
  },
  pilots: 'Pilots',
  research: 'Research',
} satisfies MetaRecord
