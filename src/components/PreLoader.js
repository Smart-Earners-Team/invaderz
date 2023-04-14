const PreLoader = () => {
  return (
    <div className="bg-black h-screen w-full">
      <div className="fixed inset-0 flex items-center justify-center bg-black h-screen w-full z-[99999]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500">
          .
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
