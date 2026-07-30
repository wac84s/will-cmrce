import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

overrideGQLOperations([
  // ACCS does not have Downloadable Items
  {
    npm: '@dropins/storefront-cart',
    skipFragments: ['DOWNLOADABLE_CART_ITEMS_FRAGMENT'],
    operations: [],
  },
  {
    npm: '@dropins/storefront-order',
    skipFragments: ['DOWNLOADABLE_ORDER_ITEMS_FRAGMENT'],
    operations: [],
  },
  // Activity 2.1 — storefront build.mjs: PDP fragment extension
  // (merge into overrideGQLOperations array)
  // Replace custom_attribute_name with your attribute code.
  {
    npm: '@dropins/storefront-pdp',
    operations: [
      `fragment PRODUCT_FRAGMENT on ProductView {
        metaTitle
      }`,
    ],
  },
  // {
  //   npm: '@dropins/storefront-checkout'
  //   operations: []
  // }
  // {
  //   npm: '@dropins/storefront-pdp'
  //   operations: [
  //     `
  //     fragment PRODUCT_FRAGMENT on ProductView {
  //       lowStock
  //     }
  //     `
  //   ]
  // }
]);
