/**
 * Font configuration for AccruLabs web.
 *
 * SWITCHING TO LOCAL FONTS:
 * Once you have the font files in /public/assets/fonts/, swap the exports at
 * the bottom of this file from the Google-font versions to the local versions.
 *
 * Expected local files:
 *   /public/assets/fonts/FunnelDisplay-VariableFont_wght.ttf   (for funnelDisplayLocal)
 *   /public/assets/fonts/BeVietnamPro-Regular.ttf
 *   /public/assets/fonts/BeVietnamPro-Light.ttf
 *   /public/assets/fonts/BeVietnamPro-SemiBold.ttf
 *   /public/assets/fonts/BeVietnamPro-Bold.ttf
 */

import { DM_Serif_Display, Be_Vietnam_Pro } from "next/font/google";

// Headings — DM Serif Display (editorial serif with strong italic support)
export const funnelDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-funnel",
  display: "swap",
});

// Body — Be Vietnam Pro
export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});
