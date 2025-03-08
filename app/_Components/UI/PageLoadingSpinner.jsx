export default function PageLoadingSpinner () {
  return (
    <main className="h-screen w-full flex items-center justify-center">
        <div className="bg-transparent border-t-2 animate-spin h-20 w-20 rounded-full"></div>
    </main>
  );
}
