# Promo Banner Block

## Overview

The Promo Banner block renders a configurable, category-driven product grid. It fetches products with GraphQL by category ID and displays a heading, product image, product name, and final price for each result.

## Integration

### Block Configuration

This block reads configuration with `readBlockConfig(block)`.

Supported parameters:

- `category-id` (required): Commerce category ID used in the GraphQL filter (`categoryIds`).
- `heading` (optional): Banner title shown above the grid. Default: `Featured Products`.
- `max-products` (optional): Maximum number of products to request and render. Default: `4`.

If `max-products` is not a valid number, the block falls back to `4`.

### Example Authoring

Use a config row style block definition with key/value pairs:

```md
| promo-banner | |
|---|---|
| category-id | 123 |
| heading | Summer Favorites |
| max-products | 6 |
```

### URL Parameters

No URL parameters are read by this block.

### Events

This block does not emit or subscribe to custom storefront events.

## Behavior Patterns

### Data Loading

1. Reads block config (`category-id`, `heading`, `max-products`).
2. Renders initial skeleton content with a loading message.
3. Executes GraphQL `productSearch` filtered by `categoryIds`.
4. Maps results to product cards linking to product detail pages via `getProductLink(urlKey, sku)`.

### Rendering Details

- Displays first product image from `images(roles: ["image"])` when available.
- Displays product final price when available.
- Uses lazy image loading for performance.
- Uses responsive grid layout based on `repeat(auto-fill, minmax(200px, 1fr))`.

### Empty and Error States

- If no products are returned, renders `No products found.`
- If the fetch fails, logs an error and renders `Unable to load products.`

## Notes

- `category-id` should match a valid Commerce category value available to the current storefront context.
- If `category-id` is missing or invalid, the request can return no items, which results in the empty state.
