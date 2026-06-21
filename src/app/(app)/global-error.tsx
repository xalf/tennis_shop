"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Приложение недоступно</h2>
        <button onClick={unstable_retry}>Перезагрузить</button>
      </body>
    </html>
  );
}
