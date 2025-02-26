import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import NotFound from '../../components/NotFound';

export const Route = createFileRoute('/auth/_auth/signup')({
  // loader: async () => {
  //   throw notFound({ routeId: '/' });
  // },
  component: RouteComponent,
  // notFoundComponent: NotFound,
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
