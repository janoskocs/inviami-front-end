// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25#issuecomment-1729071347

import { lazyImport } from '@/utils/lazyImport';

const About = lazyImport('../pages/About');
const Privacy = lazyImport('../pages/Privacy');
const Templates = lazyImport('../pages/Templates');
const EventAdmin = lazyImport('../pages/EventAdmin');

export { About, Privacy, Templates, EventAdmin };
