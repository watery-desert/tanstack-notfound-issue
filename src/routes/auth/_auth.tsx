import { createFileRoute, Outlet } from '@tanstack/react-router';
import NotFound from '../../components/NotFound';

export const Route = createFileRoute('/auth/_auth')({
  component: RouteComponent,
  // notFoundComponent: NotFound,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-4xl">Authentication</h1>
      <Outlet />
    </>
  );
}
