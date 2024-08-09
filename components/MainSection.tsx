"use client";
import { useState } from "react";
import * as XLSX from "xlsx";

const MainSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setLoading(true);
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = new Uint8Array(event.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const updatedData = (jsonData as any[]).map((item) => ({
          ...item,
          selectedTags: [],
        }));

        setData(updatedData);
        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setData([]);
    setLoading(false);
    setCurrentPage(1);
  };

  const handleTagChange = (index: number, selectedTag: string) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index
          ? {
              ...item,
              selectedTags: item.selectedTags.includes(selectedTag)
                ? item.selectedTags.filter((tag: string) => tag !== selectedTag)
                : [...item.selectedTags, selectedTag],
            }
          : item
      )
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
          <div className="w-5 h-5 border-4 border-white border-t-[#346BD4] border-solid rounded-full animate-spin"></div>
        ) : (
          "Upload"
        )}
      </button>
      {data.length > 0 && (
        <div className="mt-6 w-96 overflow-x-auto">
          <table className="min-w-full bg-gray-900 text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Links</th>
                <th className="py-2 px-4 border-b">Prefix</th>
                <th className="py-2 px-4 border-b">Select Tags</th>
                <th className="py-2 px-4 border-b">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.links}</td>
                  <td className="py-2 px-4 border-b">{item.prefix}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      className="bg-gray-800 text-white"
                      onChange={(e) => handleTagChange(index, e.target.value)}
                    >
                      <option value="">Select a tag</option>
                      <option value="Tag 1">Tag 1</option>
                      <option value="Tag 2">Tag 2</option>
                      <option value="Tag 3">Tag 3</option>
                      <option value="Tag 4">Tag 4</option>
                      <option value="Tag 5">Tag 5</option>
                    </select>
                  </td>
                  <td className="py-2 px-4 border-b">
                    {item.selectedTags.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-[#346BD4] text-white py-1 px-2 rounded"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="bg-[#346BD4] text-white py-1 px-2 rounded"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
