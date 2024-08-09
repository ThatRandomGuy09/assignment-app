"use client";
import { useState } from "react";

const MainSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setLoading(true);

      setTimeout(() => {
        console.log("Uploading:", file.name);
      }, 2000);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800 text-white">
      <div className="w-96 h-56 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center relative">
        {file ? (
          <div className="flex flex-col items-center">
            <p>{file.name}</p>
            <button
              className="text-red-500 hover:text-red-700 mt-2"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            <span>Drop your excel sheet here or </span>
            <label className="text-[#346BD4] ml-1 cursor-pointer">
              browse
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </>
        )}
      </div>
      <button
        className="bg-[#346BD4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 relative"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? (
          <div className="w-5 h-5 border-4 border-white border-t-[#346BD4] border-solid rounded-lg animate-spin"></div>
        ) : (
          "Upload"
        )}
      </button>
    </div>
  );
};

export default MainSection;
