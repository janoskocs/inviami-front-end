import { ComponentType } from 'react';
import { lazyImport } from '@/utils/lazyImport';

interface ComponentMap {
  [key: string]: ComponentType;
}

export const componentMap: ComponentMap = {
  //Need to add index to ensure the component is loaded
  'birthday-1': lazyImport('../features/events/templates/Birthday1/index'),
  'birthday-2': lazyImport('../features/events/templates/Birthday2/index'),
  'birthday-5': lazyImport('../features/events/templates/Birthday5/index'),
};
