import Enzyme from 'enzyme';

global.bundle = {
  apiLocation: () => '/acme/app/api/v1',
  spaceLocation: () => '/acme',
  kappLocation: () => '/acme/catalog',
  kappSlug: () => 'catalog',
};
