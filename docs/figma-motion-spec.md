# Figma Motion Spec

## File structure suggestion
- Page 1: Brand foundation
- Page 2: Key screens
- Page 3: Motion timelines
- Page 4: Components and variants

## Frames
- Hero desktop: 1440 x 1100
- Hero mobile: 390 x 980
- Menu interaction frame: 1440 x 1280
- Gallery lightbox frame: 1440 x 1100
- Reservation flow frame: 1440 x 1080

## Components
- Topbar / default / scrolled
- Button / primary / ghost / pressed
- Filter chip / idle / active
- Menu card / idle / hover peel / reduced motion
- Gallery card / idle / lightbox origin
- Reservation segment / idle / selected
- Sticky CTA / expanded / condensed

## Motion timelines
- Hero headline reveal
  - Line 1: delay 0ms, duration 550ms, y 24 to 0, opacity 0 to 1, skewX -1.2deg to 0deg
  - Line 2: delay 80ms, same easing and duration
  - Line 3: delay 160ms, same easing and duration
- CTA typographic morph
  - Duration 120ms
  - Letter spacing 0 to 0.05em
  - Weight contrast handled through color and scale because Playfair Display web delivery is not variable here
- Menu filter FLIP
  - Duration 460ms
  - layout animation with fade out and fade in between category states
- Dish peel hover
  - Duration 360ms
  - rotateY -12deg to 0deg, translate3d 22px 18px 12px to 0 0 0
- Lightbox spring
  - Spring feel: medium overshoot, backdrop fade 280ms
- Reservation reveal
  - Availability panel enters from x 28px over 400ms
  - Time chips stagger at 40ms

## Accessibility variants
- Reduced motion keeps state changes but removes parallax and complex transform choreography.
- Focus-visible ring uses accent color with 2px outline and 3px offset.

## Adaptation log
- Variable serif morph was softened to letter-spacing and scale only.
  - Why: keeps the tactile feel without introducing self-hosted font binaries.
  - Revert: replace Playfair Display with a variable serif and animate `font-variation-settings`.
- Photography was represented with stylized SVG art direction plates.
  - Why: keeps the repo portable and avoids placeholder stock imagery.
  - Revert: swap `/public/images/*.svg` with graded photography exports.
