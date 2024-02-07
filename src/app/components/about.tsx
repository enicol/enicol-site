export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-14 bg-soft-white">
      <div className="relative flex flex-col place-items-center justify-center">
        <h1 className={`mb-2 text-6xl font-semibold text-saffron`}>
          emma <span className="text-tarragon-500">n</span>
          <span className="text-tarragon-400">i</span>
          <span className="text-tarragon-300">c</span>
          <span className="text-tarragon-200">o</span>
          <span className="text-tarragon-100">l</span>
        </h1>
        <h2 className={`mb-3 text-base font-regular text-black-green`}>
          about
        </h2>
      </div>
    </main>
  );
}
