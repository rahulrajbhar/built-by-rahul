## 2025-02-12 - Ensure Custom Tab/Filter Groups Support Screen Readers

**Learning:** Custom UI controls like "tabs" or "filters" (such as those managing the portfolio items) often rely solely on visual cues like `.active` CSS classes to indicate the current state. This provides no feedback to screen readers about which control is selected.

**Action:** Wrap custom filter/tab buttons in a `role="group"` container with an `aria-label` identifying the group. Then, apply `aria-pressed="true"` to the active button and `aria-pressed="false"` to inactive buttons. Ensure the JavaScript that toggles the visual class also toggles these ARIA attributes so assistive technology remains in sync with the visual state.
