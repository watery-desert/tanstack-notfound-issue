import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h2 className="text-4xl py-5">LogIn Page</h2>
      <Link className="bg-amber-500 p-2 rounded-md" to="/auth/signup">
        Go to Login
      </Link>
    </>
  );
}
