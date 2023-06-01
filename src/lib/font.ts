import { Inter, Roboto, Lato } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "600", "900"],
	display: "swap",
	variable: "--font-inter",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
	display: "swap",
	variable: "--font-roboto",
});

export const lato = Lato({
	subsets: ["latin"],
	weight: ["300", "400", "900"],
	style: ["italic", "normal"],
	display: "swap",
	variable: "--font-lato",
});
