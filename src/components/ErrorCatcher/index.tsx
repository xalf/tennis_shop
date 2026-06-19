import ErrorFallback from "../ErrorFallback";

export default function ErrorCatcher({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ErrorFallback title="Что-то пошло не так">{children}</ErrorFallback>;
}
