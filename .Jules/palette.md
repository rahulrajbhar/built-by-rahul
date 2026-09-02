## 2024-05-20 - Filter Button Accessibility & UX
**Learning:** Filter button groups need `aria-pressed` states and their target container needs `aria-live="polite"` so screen reader users understand the state of the filters and hear when content updates. Additionally, re-triggering animations on filtered items provides a much smoother UX than instant snapping.
**Action:** Always add `aria-pressed` to custom filter toggles, set `aria-live="polite"` on the dynamic content container they control, and consider resetting CSS animations on item display to ensure smooth transitions.
