import Avatar from "@/components/ui/Avatar";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
/**
 * Home page
 * @returns
 */
export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<main>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid atque
				cum consequatur laboriosam consequuntur cupiditate voluptates quod?
				Exercitationem ipsam vero officia harum soluta, dolorum odio. Amet nam
				<Link href="/auth">Auth</Link>
			</main>
			<Footer />
		</>
	);
}
