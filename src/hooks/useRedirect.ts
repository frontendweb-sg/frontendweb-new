import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useRedirect() {
	const { push } = useRouter();
	const { data: session, status } = useSession();

	useEffect(() => {
		const role = session?.user.role;
		if (role === "user") {
			push("/user");
		}
		if (role === "admin") {
			push("/admin");
		}
	}, [session, push]);
}
