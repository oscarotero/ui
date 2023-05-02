# UI Normalize

A set of CSS styles to normalize the browser' default styles to create
crossbrowser design systems. It's build on top of
[modern-normalize](https://github.com/sindresorhus/modern-normalize) with the
following additions:

- No CSS classes are used, only HTML selectors
- Normalized the `focus` state of all elements.
- Normalize the appearance of the following components:
  - **Accordion**: Using the `details` elements.
  - **Button**: Using the `button`, `input[type="button"]` and
    `a[role="button"]` elements.
  - **Checkbox**: Unified the style of `input[type="checkbox"]`.
  - **Radio**: Unified the style of `input[type="radio"]`.
  - **Dialog**: Normalized the default style of the `dialog` element.
  - **Progress**: Normalized the default style of the `progress` element.
  - **Select**: Unified the style of the `select` element.
  - **Slider**: Unified the style of the `input[type="range"]` element.
  - **Switch**: Using the `button[role="switch"]` element.
  - **Separator**: Using the `hr` element.
  - **Tooltip**: Using the `*[role="tooltip"]` element (no interactive).

## Usage

The best way to use this stylesheet is combined with
[`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer). For
example:

```css
@import "ui-normalize.css" layer(normalize);

@import "your-design-system.css" layer(theme);
@import "your-theme.css" layer(theme);
```

## To-do

- [ ] Use system colors:
      https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors
