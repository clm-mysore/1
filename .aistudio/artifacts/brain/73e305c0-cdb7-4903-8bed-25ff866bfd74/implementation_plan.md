# Ministry Moments Auto-Playing Horizontal Carousel

**Status**: Completed and Verified

An interactive, responsive, and auto-advancing horizontal carousel for the 'Ministry Moments' section of Christ's Love Ministries, allowing visitors on both mobile and desktop to swipe through outreach, worship, youth education, and fellowship photos without needing to open the external gallery modal.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The auto-playing carousel enhances immediate visual engagement on the landing page while preserving the existing Google Drive gallery modal for visitors seeking the complete high-resolution cloud archive.

- **Confirmed Decision 1 (Controls & Interaction)**: Touch swipe on mobile and mouse drag/scroll on desktop, paired with chevron arrow buttons, progress indicator dots, and pause-on-hover / pause-on-touch to prevent accidental skips while reading.
- **Confirmed Decision 2 (Slide Content)**: High-resolution cards featuring photographic visual framing, subtle dark navy gradient scrim, title, category tag (Outreach, Worship, Youth, Prayer), and bilingual/trilingual caption.
- **Confirmed Decision 3 (Auto-Play Timing)**: Auto-advances every 4.5 seconds with smooth CSS transitions (`cubic-bezier(0.16, 1, 0.3, 1)`) and automatic reset on manual user interaction.

---

### 1. Overview & Core Concept

- **What It Does**: Replaces the static 4-item card grid in the `#gallery` section with an auto-playing horizontal carousel displaying a curated collection of ministry moments (outreach drives, worship services, youth mentorship, prayer sessions, and community support).
- **Target Audience**: Church members, prospective visitors, community partners, and seekers across Mysuru and global online viewers looking for authentic visual glimpses of church activities.
- **Key Value**: Provides an engaging visual narrative right inside the main page flow. Users can seamlessly browse multiple moments in seconds without modal interruptions.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Passive Browsing*: The carousel auto-scrolls smoothly every 4.5 seconds, highlighting different outreach and worship events.
  2. *Active Interaction*: The user pauses auto-play by hovering the cursor or placing a finger on a slide; swiping left/right or clicking arrows cycles between items smoothly.
  3. *Filtering / Category Selection*: Clicking category buttons (All, Worship, Outreach, Youth) highlights or jumps to corresponding slides.
  4. *Deep Archive Access*: The "View Full Photo Gallery" action button below the carousel remains available to launch the secure Google Drive modal for exhaustive historical records.
- **Visual Identity & Theme**:
  - *Color Palette*: Deep royal navy canvas (`#030712`, `#0a1128`), brushed gold accents (`#eab308`, `#facc15`), high-contrast slate text (`#f8fafc`, `#94a3b8`).
  - *Slide Geometry*: Rounded luxury cards (`rounded-2xl`, subtle border `border-slate-800`, hover border `border-gold-500/50`) with measured gradient contrast scrim (`bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent`).
  - *Typography*: Playfair / Cinzel serif headlines (`font-serif font-bold text-white`), clean geometric body text, and tabular slide indicators (`01 / 06`).
- **Motion & Micro-interactions**:
  - Smooth slider track transform transition (`transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`).
  - Arrow hover states with subtle gold glow and scale (`scale-105`).
  - Active dot indicator expansion (`w-8 bg-gold-400` vs `w-2 bg-slate-600`).
  - Touch swipe inertia with threshold detection ($\ge 40\text{px}$) for natural finger gesture feel.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Native CSS/JS Carousel vs Heavy External Library**
  - *Chosen Approach*: Lightweight, performant vanilla JavaScript carousel with CSS transforms and passive touch listeners directly integrated into `index.html`.
  - *Why*: Eliminates extra HTTP script payloads, avoids external CDN script failures or security sandboxing issues, and matches the self-contained GitHub Pages architecture.
  - *Alternatives Considered*: Swiper.js / Slick CDN (adds external script dependency that can fail in offline or restricted environments).
- **Decision 2: Image Asset Strategy**
  - *Chosen Approach*: Utilize the verified local image assets (`photo22.jpg.jpeg`, `photo11.jpg.jpeg`, `photo4.jpg.jpeg`, `photo13.jpg.jpeg`, `ruben-ranjith.jpg`, `nandini-ruben.jpg`) with robust `onerror` fallbacks and SVG/CSS backup cards to guarantee zero broken images.
  - *Why*: Complies strictly with zero-broken-image policies and ensures fast initial loading.
- **Decision 3: Multi-Language Cohesion**
  - *Chosen Approach*: Expand the existing `translations` dictionary (`en`, `kn`, `hi`) to include translations for every carousel slide's title and description, guaranteeing zero language mixing when switching between English, Kannada, and Hindi.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        #gallery Section Container                      │
├────────────────────────────────────────────────────────────────────────┤
│  [ Visual Archive Badge ]  [ "Ministry Moments" Title ]  [ Divider ]   │
│                                                                        │
│  [ Category Filter Buttons: All · Worship · Outreach · Youth ]         │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ < Prev Button >        Carousel Viewport         < Next Button > │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │ Slide 1 (Outreach)  │ Slide 2 (Worship) │ Slide 3 (Youth)  │  │  │
│  │  │ Image + Scrim       │ Image + Scrim     │ Image + Scrim    │  │  │
│  │  │ Title & Desc        │ Title & Desc      │ Title & Desc     │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [ Slide Progress Dots: ● ○ ○ ○ ○ ○ ]   [ Play/Pause Toggle ]          │
│                                                                        │
│  [ "View Full Photo Gallery" Button (Opens Drive Modal) ]              │
└────────────────────────────────────────────────────────────────────────┘
```

#### State & Event Mapping
- `currentSlideIndex`: Active slide pointer (0 to N-1).
- `isAutoPlaying`: Boolean state controlling the 4500ms `setInterval`.
- `touchStartX`, `touchEndX`: Coordinates tracking mobile touch swipes.
- `updateCarousel(index)`: Translates slider track (`translateX(-${index * 100}%)` or multi-card width offset), updates active dot styling, and updates ARIA accessibility attributes.
- `trilingual Sync`: Invoked within `switchLanguage(lang)` to dynamically replace `data-i18n` text nodes across all slide cards.
