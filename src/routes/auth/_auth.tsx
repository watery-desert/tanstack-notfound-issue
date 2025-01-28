import { createFileRoute, notFound, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-4xl">Authentication</h1>
      <Outlet />
    </>
  );
}
