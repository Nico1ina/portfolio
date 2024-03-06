const Animation = () => {
  return (
    <div className="overflow-hidden relative group">
      <div className="animate-slide-down absolute bottom-10 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white animate-fall font-mono italic">
          LARSSON
        </h1>
      </div>
      <div className="animate-slide-up absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white animate-fall font-mono italic">
          NICOLINA
        </h1>
      </div>
    </div>
  );
};

export default Animation;
