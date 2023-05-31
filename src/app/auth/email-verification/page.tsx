"use client";
import { useSearchParams } from "next/navigation";

/**
 * Email verification component
 * @param param0
 * @returns
 */
const Page = ({ params }: { params: { success: boolean } }) => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  if (success === "true") {
    return <div>Email verified success</div>;
  }

  return <div>Email verified</div>;
};

export default Page;
