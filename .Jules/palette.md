## 2024-05-18 - Non-semantic `div`s for interactive UI elements
**Learning:** Found interactive elements like time selection chips implemented as `div` tags with `onclick` handlers, lacking proper keyboard accessibility and ARIA roles.
**Action:** When implementing custom interactive controls, always use semantic HTML (like `<button>`), add appropriate ARIA roles (like `role="group"` and `aria-pressed`), and ensure keyboard accessibility (like `:focus-visible`).
