import Avatar from "@/components/ui/Avatar";
import styles from "./page.module.css";
import Link from "next/link";

/**
 * Home page
 * @returns
 */
export default function Home() {
	return (
		<main>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid atque
			cum consequatur laboriosam consequuntur cupiditate voluptates quod?
			Exercitationem ipsam vero officia harum soluta, dolorum odio. Amet nam
			<Link href="/auth">Auth</Link>
		</main>
	);
}
