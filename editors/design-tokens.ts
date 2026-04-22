/**
 * Ethereal Red design tokens — shared across all editors and app drives.
 * Source: /home/p/Powerhouse/swarm-connect/DESIGN.md
 *
 * High-End Minimalism: airy, clinical white surfaces punctuated by vibrant red.
 * Spline Sans typography. 8px spacing rhythm. Tonal depth over heavy borders.
 */

export const colors = {
  // Surfaces
  surface: "#f9f9f9",
  surfaceBright: "#f9f9f9",
  surfaceDim: "#dadada",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f3f3f4",
  surfaceContainer: "#eeeeee",
  surfaceContainerHigh: "#e8e8e8",
  surfaceContainerHighest: "#e2e2e2",
  surfaceVariant: "#e2e2e2",
  background: "#f9f9f9",

  // Ink
  onSurface: "#1a1c1c",
  onSurfaceVariant: "#5a403f",
  onBackground: "#1a1c1c",
  inverseSurface: "#2f3131",
  inverseOnSurface: "#f0f1f1",
  outline: "#8e706e",
  outlineVariant: "#e2bebc",

  // Primary (Ethereal Red)
  primary: "#b0232b",
  primaryBright: "#F85858", // hover / active accent
  onPrimary: "#ffffff",
  primaryContainer: "#d33d40",
  onPrimaryContainer: "#fffbff",
  primaryFixed: "#ffdad7",
  primaryFixedDim: "#ffb3af",
  onPrimaryFixed: "#410005",
  onPrimaryFixedVariant: "#910518",
  inversePrimary: "#ffb3af",
  surfaceTint: "#b4262d",

  // Secondary + tertiary
  secondary: "#5f5e5e",
  onSecondary: "#ffffff",
  secondaryContainer: "#e2dfde",
  onSecondaryContainer: "#636262",
  tertiary: "#5a5c60",
  onTertiary: "#ffffff",
  tertiaryContainer: "#737479",
  onTertiaryContainer: "#fdfcff",

  // Semantic
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#93000a",

  // Status pill backgrounds (derived for lifecycle badges)
  statusDraft: "#e2e2e2",
  statusPending: "#fff4e5",
  statusReview: "#e5f2ff",
  statusApproved: "#dff5e5",
  statusRejected: "#ffdad6",
  statusFunded: "#e0f3ea",
  statusCompleted: "#d6ead9",
  statusClosed: "#ebe4e3",
} as const;

export const typography = {
  fontFamily: "'Spline Sans', ui-sans-serif, system-ui, sans-serif",
  displayXl: {
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "56px",
    letterSpacing: "-0.02em",
  },
  headlineLg: {
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "40px",
    letterSpacing: "-0.01em",
  },
  headlineMd: {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "32px",
  },
  bodyLg: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "28px",
  },
  bodyMd: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  labelBold: {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
  },
  labelSm: {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "16px",
  },
} as const;

export const radius = {
  sm: "0.25rem",
  base: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
} as const;

export const space = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "48px",
  gutter: "24px",
  margin: "32px",
} as const;

export const shadow = {
  surface: "0px 4px 20px rgba(0,0,0,0.04)",
  hover: "0px 10px 30px rgba(0,0,0,0.08)",
  backdrop: "rgba(255,255,255,0.7)",
} as const;

/**
 * Shared CSS classes exported as string constants for consistent styling.
 * Editors compose these instead of redefining Tailwind.
 */
export const cls = {
  page: "rfp-page",
  card: "rfp-card",
  section: "rfp-section",
  sectionTitle: "rfp-section-title",
  field: "rfp-field",
  label: "rfp-label",
  hint: "rfp-hint",
  input: "rfp-input",
  textarea: "rfp-textarea",
  select: "rfp-select",
  btnPrimary: "rfp-btn-primary",
  btnSecondary: "rfp-btn-secondary",
  btnGhost: "rfp-btn-ghost",
  chip: "rfp-chip",
  chipPrimary: "rfp-chip-primary",
  statusBadge: "rfp-status-badge",
  divider: "rfp-divider",
  row: "rfp-row",
  col: "rfp-col",
  grid2: "rfp-grid-2",
  grid3: "rfp-grid-3",
} as const;
