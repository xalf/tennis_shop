"use client";

export default function ErrorHandler({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main>
      <h2>Что-то пошло не так</h2>
      <p>{error.message}</p>
      <button onClick={unstable_retry}>Повторить</button>
    </main>
  );
}
