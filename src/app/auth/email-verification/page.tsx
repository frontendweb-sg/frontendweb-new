"use client";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsCheck } from "react-icons/bs";

/**
 * Email verification component
 * @param param0
 * @returns
 */
const Page = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  if (success === "true") {
    return (
      <div className="text-center gap-4 d-flex flex-column justify-content-center align-items-center">
        <div
          className="d-flex justify-content-center fs-1 align-items-center border-border rounded-circle"
          style={{ width: "50px", height: "50px" }}
        >
          <BsCheck className=" text-success " />
        </div>
        <Typography>You have successfully verified your account</Typography>
        <Link className="btn btn-primary btn-md" href="/auth">
          Login
        </Link>
      </div>
    );
  }

  return <div>Email verified</div>;
};

export default Page;
