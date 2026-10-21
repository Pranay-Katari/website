---
name: Pranay Katari Portfolio
description: A Himalayan dawn portfolio for systems-minded software engineering.
colors:
  deep-indigo: "#041033"
  alpine-blue: "#143c80"
  snow: "#f8f5f5"
  mist: "#b7c4e3"
  alpenglow: "#eea1b7"
  lilac: "#a57ab1"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(4rem, 9.8vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 500
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.67rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  orb: "50%"
spacing:
  compact: "10px"
  control: "15px 19px"
  section: "clamp(80px, 12vw, 165px)"
components:
  button-light:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.alpine-blue}"
    padding: "{spacing.control}"
  button-rose:
    backgroundColor: "{colors.alpenglow}"
    textColor: "#512243"
    padding: "{spacing.control}"
---

# Design System: Pranay Katari Portfolio

## Overview

**Creative North Star: "Himalayan Dawn"**

This portfolio uses a real Himalayan landscape as the emotional ground for a software-engineering showcase. Deep indigo foothills, cool alpine blue, and alpenglow pink make technical work feel expansive rather than sterile. The first viewport makes the landscape and the work inseparable: engineering is presented as ascent, not as a template hero.

Content alternates between wide, quiet editorial surfaces and dense technical evidence. The system is expressive in its environmental motion and exact in its typography, metrics, and horizontal rules.

**Key Characteristics:**
- Landscape-led atmosphere with moving light and precise linework.
- Strong sans-serif display paired with an italic serif for moments of lift.
- Flat information bands, trail-like experience entries, and oversized project panels.

## Colors

The palette moves from dark alpine sky to warm snow and alpenglow, reserving the pink accent for movement, emphasis, and calls to action.

### Primary
- **Alpine Blue:** primary page ground for immersive engineering sections and the hero.
- **Alpenglow:** a warm accent for action, trail markers, and selected emphasis.

### Secondary
- **Lilac:** restrained atmospheric color for the project and scroll transitions.

### Neutral
- **Deep Indigo:** darkest background and footer ground.
- **Snow:** primary high-contrast text and light action surface.
- **Mist:** secondary text and fine structural detail.

**The Altitude Rule.** Dark surfaces carry the high-contrast content; light surfaces are used as spacious rests, never as generic card backgrounds.

## Typography

**Display Font:** Manrope, with Arial fallback.
**Body Font:** Manrope, with Arial fallback.
**Label/Mono Font:** DM Mono, monospace.

**Character:** Manrope keeps technical information confident and clean. Playfair Display is reserved for the italic half of major display phrases, creating contrast without making the interface ornamental.

### Hierarchy
- **Display:** extra-bold, fluid viewport scale; used for hero and section statements.
- **Headline:** bold, fluid scale; used for company and project names.
- **Body:** medium weight with open leading; used for evidence and technical detail.
- **Label:** mono, uppercase, tracked; used for locations, metadata, and small system descriptors.

**The Two-Voice Rule.** Use serif only as a deliberate counterpart within a display phrase or a project title line; body content remains sans-serif.

## Layout

Sections use full-width bands with generous vertical space. Desktop content has wide side padding and a maximum 1250px reading area for experience. Project panels intentionally overflow into a horizontal rail, which becomes a native swipeable sequence on mobile.

On screens below 760px, navigation simplifies, timeline pins disappear, typography reduces before it clips, and all dense rows become single-column. The hero retains its landscape composition but preserves a safe 7vw side margin.

## Elevation & Depth

Depth comes primarily from tonal landscape layers, an actual background image, and slow ambient movement. Project panels use a soft, offset shadow only to indicate they are liftable showcase artifacts; experience entries remain flat on their terrain.

**The Terrain Rule.** Shadows must feel like distance in the landscape, not like floating dashboard cards.

## Shapes

The system is mostly square-edged and typographic. Circles are reserved for trail pins and atmospheric orbs; fine one-pixel rules organize the page. The hand-drawn mountain mark is the recurring geometric signature.

## Components

### Buttons
- **Shape:** crisp rectangular controls without rounded corners.
- **Primary:** snow surface on the hero; alpenglow surface in the footer.
- **Hover / Focus:** lift upward by 3px with an amplified soft shadow; keyboard focus remains a white two-pixel outline.

### Navigation
- **Style:** small, uppercase, tracked text with a minimal underlined resume action.
- **Mobile:** the middle navigation group hides, leaving the monogram and resume action.

### Project Panels
- **Corner Style:** square.
- **Background:** tonal blue, rose, lavender, or ice gradients with thin snow borders.
- **Depth:** project panels lift on hover; background orbital lines animate continuously.
- **Internal Padding:** generous, responsive horizontal padding.

### Trail Entries
- **Style:** flat, bordered rows with a numbered circular marker on desktop.
- **State:** no decorative card treatment; entry copy stays directly on the section ground.

## Do's and Don'ts

### Do:
- **Do** let the Himalayan image remain visible and legible as an environment, not a texture.
- **Do** use the alpenglow accent selectively for action and directional detail.
- **Do** preserve motion as slow, whole-surface atmosphere with a reduced-motion fallback.
- **Do** keep project and experience copy concrete, measured, and easy to scan.

### Don't:
- **Don't** add generic icon grids, glass panels, or pill-shaped interface chrome.
- **Don't** put serif typography into dense technical copy.
- **Don't** use multiple card systems to replace the experience trail or project rail.
- **Don't** let hero typography clip at mobile widths.
