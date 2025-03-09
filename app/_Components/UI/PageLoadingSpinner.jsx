export default function PageLoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div
        className={`bg-transparent border-t-2 animate-spin rounded-full ${
          sizeClasses[size] || sizeClasses.md
        }`}
      ></div>
    </main>
  );
}
