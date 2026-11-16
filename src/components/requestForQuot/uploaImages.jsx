import { motion } from "framer-motion";
import { useState } from "react";

export default function ImageUploader({ currentProduct, setCurrentProduct, showToast }) {
  const [isDragging, setIsDragging] = useState(false);
  const MAX_IMAGES = 3;
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {

    const files = Array.from(e.target.files);
    const remainingSlots = MAX_IMAGES - currentProduct.images.length;
    if (files.length > remainingSlots) {
       showToast("warning", `You can only upload ${remainingSlots} more image${remainingSlots > 1 ? "s" : ""}.`);
    }
    const validFiles = files.slice(0, remainingSlots);
    const newImages = validFiles.map((file) => (file));
  const newImagesPreview = validFiles.map((file) => (URL.createObjectURL(file)));
    setCurrentProduct((p) => ({
      ...p,
      images: [...p.images, ...newImages],
      previeImages: [...p.previeImages, ...newImagesPreview],
    }));
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file)
        
  }));
    setCurrentProduct((p) => ({
      ...p,
      images: [...p.images, ...newImages],
      previeImages: [...p.previeImages, ...newImagesPreview],
    }));
  };

  return (
    <div className="mt-4">
      <label className="block font-medium mb-2 text-gray-700 text-sm">
        Upload Product Images
      </label>
      {currentProduct.images.length < 3 && (
      <motion.div
        whileHover={{ scale: 1.02 }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
          isDragging
            ? "border-orange-500 bg-orange-50"
            : "border-orange-300 bg-orange-50/50 hover:border-orange-500"
        }`}
        onClick={() => document.getElementById("imageUpload").click()}
      >
        <input
          id="imageUpload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center text-gray-600 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-orange-500 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 16l3.586-3.586a2 2 0 012.828 0L12 16m0 0l3.586-3.586a2 2 0 012.828 0L21 16m-9-5V4m0 7v7"
            />
          </svg>
          <p className="text-sm">
            <span className="font-semibold text-orange-600">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-xs text-gray-400 mt-1">
            PNG, JPG up to 5MB each
          </p>
        </div>
      </motion.div>
      )}
      {currentProduct.previeImages.length > 0 && (
        <motion.div
          layout
          className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
        >
          {currentProduct.previeImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <img
                src={img}
                alt="preview"
                className="w-full h-24 sm:h-28 object-cover rounded-lg shadow-sm border border-gray-200"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentProduct((p) => ({
                    ...p,
                    images: p.images.filter((_, index) => index !== i),
                    previeImages:p.previeImages.filter((_, index) => index !== i)
                  }));
                }}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
