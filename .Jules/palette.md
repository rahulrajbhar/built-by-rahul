## 2026-09-01 - Proper semantic buttons for custom UI chips
**Learning:** When building custom interactive components like selection chips (e.g. time slot pickers), using `<div>` elements with `onclick` handlers removes keyboard accessibility and correct screen reader context.
**Action:** Always use `<button type="button">` for interactive selection elements to gain free keyboard focus/activation, and use `aria-pressed` with `role="group"` to convey the selected state context properly.
