import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import Loading from './components/Loading';

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
