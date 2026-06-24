export default function FormLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex justify-center flex-col">
      <div className="mx-auto w-150">{children}</div>
    </div>
  );
}
