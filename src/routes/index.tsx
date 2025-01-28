import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3 className="text-6xl">Welcome Home!</h3>
      <span className='flex gap-1.5 mt-4'>
        <Link className="bg-amber-500 p-2 rounded-md" to="/auth/login">
          Go to LogIn
        </Link>
        <Link className="bg-amber-500 p-2 rounded-md" to="/auth/signup">
          Go to LogIn
        </Link>
      </span>
    </div>
  );
}
