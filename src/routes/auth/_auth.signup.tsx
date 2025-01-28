import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h2 className="text-4xl py-5">SignUp Page</h2>
      <Link className="bg-amber-500 p-2 rounded-md" to="/auth/login">
        Go to Login
      </Link>
    </>
  );
}
