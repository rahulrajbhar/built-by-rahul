## 2025-02-23 - Interactive UI Elements (Chips) Keyboard Accessibility
**Learning:** Custom interactive elements like time-slot selection chips often use `<div>` tags, breaking keyboard navigation and screen reader support since they can't natively receive focus or trigger via Enter/Space.
**Action:** Always use `<button type="button">` for interactive chip components and ensure `aria-pressed` or `aria-selected` attributes are correctly toggled in JS for semantic state handling.
