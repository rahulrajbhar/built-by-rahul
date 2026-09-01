## 2026-09-01 - Toggle Button Accessibility
**Learning:** When using buttons to filter content, visual active classes aren't enough for screen readers. Using `aria-pressed` states gives screen reader users explicit context that a button acts as a toggle and communicates its current state.
**Action:** Add `role="group"` and `aria-label` to button containers, and dynamically toggle `aria-pressed` between `true` and `false` when updating active button states in JavaScript.
