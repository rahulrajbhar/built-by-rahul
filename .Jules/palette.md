## 2026-09-09 - Accessible Interactive Chips
**Learning:** Using `<div>` elements with `onclick` handlers for interactive chips (like time selection) prevents keyboard navigation and screen reader interactions.
**Action:** Always use semantic `<button type="button">` elements for interactive chips. Add `font-family: inherit; color: inherit;` to ensure they match the surrounding design system without browser default styling issues. Manage `aria-pressed` state via JavaScript for toggle buttons.
