## 2024-05-20 - Filter Button Accessibility & UX
**Learning:** Filter button groups need `aria-pressed` states and their target container needs `aria-live="polite"` so screen reader users understand the state of the filters and hear when content updates. Additionally, re-triggering animations on filtered items provides a much smoother UX than instant snapping.
**Action:** Always add `aria-pressed` to custom filter toggles, set `aria-live="polite"` on the dynamic content container they control, and consider resetting CSS animations on item display to ensure smooth transitions.
## 2026-09-01 - Toggle Button Accessibility
**Learning:** When using buttons to filter content, visual active classes aren't enough for screen readers. Using `aria-pressed` states gives screen reader users explicit context that a button acts as a toggle and communicates its current state.
**Action:** Add `role="group"` and `aria-label` to button containers, and dynamically toggle `aria-pressed` between `true` and `false` when updating active button states in JavaScript.
## 2026-08-31 - [Adding aria-pressed to filter tab buttons]
**Learning:** [When using custom buttons to simulate a tab or filter selection interface, screen readers need to know which option is currently active. While a visual cue (like an `.active` class) is enough for sighted users, `aria-pressed="true"` (or `aria-selected="true"` if using a proper tablist role) communicates the state effectively to assistive technologies.]
**Action:** [Ensure stateful custom toggle buttons, such as category filters or tabs without full ARIA tab roles, toggle the `aria-pressed` or `aria-selected` attribute via JavaScript alongside visual class changes.]
