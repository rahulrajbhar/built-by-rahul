## 2026-09-03 - Accessibility for Tab Filters
**Learning:** Added semantic context and state announcement to the filter buttons. This helps screen readers understand that these buttons act as a group of filters and which one is currently selected.
**Action:** Ensure custom tab/filter components use `role="group"`, `aria-label`, and `aria-pressed` attributes, and update the `aria-pressed` state dynamically via JavaScript.
