import Link from "next/link"

import Step from "./Step"

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up your first user">
        <p>
          Head over to the{" "}
          <Link
            href="/login"
            className="text-foreground/80 font-bold hover:underline"
          >
            Login
          </Link>{" "}
          page and sign up your first user. It&quot;s okay if this is just you for now. Your awesome idea will have
          plenty of users later!
        </p>
      </Step>
    </ol>
  )
}