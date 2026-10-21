## 2026-09-06 - [Label-Input associations]
**Learning:** Custom forms in templates often miss basic semantic HTML relationships like `id` on inputs and `for` on labels.
**Action:** Always verify label-input associations when adding or reviewing forms.
## 2026-09-05 - Missing Form Label Associations
**Learning:** Many static site forms lack explicit 'for' and 'id' associations between labels and inputs, hindering screen reader users and preventing click-to-focus functionality.
**Action:** Always ensure all <label> elements have a 'for' attribute matching the 'id' of their associated input, text area, or select element.
## 2024-05-18 - Non-semantic `div`s for interactive UI elements
**Learning:** Found interactive elements like time selection chips implemented as `div` tags with `onclick` handlers, lacking proper keyboard accessibility and ARIA roles.
**Action:** When implementing custom interactive controls, always use semantic HTML (like `<button>`), add appropriate ARIA roles (like `role="group"` and `aria-pressed`), and ensure keyboard accessibility (like `:focus-visible`).
## 2026-09-03 - Accessibility for Tab Filters
**Learning:** Added semantic context and state announcement to the filter buttons. This helps screen readers understand that these buttons act as a group of filters and which one is currently selected.
**Action:** Ensure custom tab/filter components use `role="group"`, `aria-label`, and `aria-pressed` attributes, and update the `aria-pressed` state dynamically via JavaScript.
## 2024-05-20 - Filter Button Accessibility & UX
**Learning:** Filter button groups need `aria-pressed` states and their target container needs `aria-live="polite"` so screen reader users understand the state of the filters and hear when content updates. Additionally, re-triggering animations on filtered items provides a much smoother UX than instant snapping.
**Action:** Always add `aria-pressed` to custom filter toggles, set `aria-live="polite"` on the dynamic content container they control, and consider resetting CSS animations on item display to ensure smooth transitions.
## 2026-09-01 - Toggle Button Accessibility
**Learning:** When using buttons to filter content, visual active classes aren't enough for screen readers. Using `aria-pressed` states gives screen reader users explicit context that a button acts as a toggle and communicates its current state.
**Action:** Add `role="group"` and `aria-label` to button containers, and dynamically toggle `aria-pressed` between `true` and `false` when updating active button states in JavaScript.
## 2026-08-31 - [Adding aria-pressed to filter tab buttons]
**Learning:** [When using custom buttons to simulate a tab or filter selection interface, screen readers need to know which option is currently active. While a visual cue (like an `.active` class) is enough for sighted users, `aria-pressed="true"` (or `aria-selected="true"` if using a proper tablist role) communicates the state effectively to assistive technologies.]
**Action:** [Ensure stateful custom toggle buttons, such as category filters or tabs without full ARIA tab roles, toggle the `aria-pressed` or `aria-selected` attribute via JavaScript alongside visual class changes.]
