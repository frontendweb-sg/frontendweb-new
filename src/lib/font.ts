import { Inter, Roboto, Lato } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--inter-font",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  display: "swap",
  variable: "--roboto-font",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--lato-font",
});
