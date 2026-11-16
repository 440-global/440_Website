import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

export default function SummaryStep({ products, handleEditProduct, handleNext, handleBack , handleDeleteProduct}) {
    return (
        <motion.div
        key="step2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        className="flex flex-col h-[calc(100vh-100px)] sm:h-[85vh]"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Review Your Products
        </h2>
      
        {/* Scrollable product list */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {products.length === 0 ? (
            <p className="text-gray-500">No products added yet.</p>
          ) : (
            products.map((p, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-3 flex flex-col md:flex-row gap-4 items-start bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Top-right corner action buttons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEditProduct(index)}
                    className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition transform hover:scale-110"
                    title="Edit"
                  >
                    <FaEdit className="text-lg sm:text-xl" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition transform hover:scale-110"
                    title="Delete"
                  >
                    <FaTrash className="text-lg sm:text-xl" />
                  </button>
                </div>
      
                {/* Product preview image */}
                <div className="flex-shrink-0 flex gap-2">
                  {p.previeImages[0] ? (
                    <img
                      src={p.previeImages[0]}
                      alt={p.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border"
                    />
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
      
                {/* Product info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-orange-600">{p.name}</h3>
                  <p className="text-gray-700 text-sm mt-1">{p.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{p.quantity}</p>
      
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {p.previeImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`img-${i}`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      
        {/* Fixed bottom buttons */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t py-3 mt-4 flex flex-col sm:flex-row justify-between gap-3 px-2 sm:px-0">
          <button
            onClick={handleBack}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            <FaArrowLeft /> Back
          </button>
      
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-auto bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition"
            >
              Add More
            </button>
      
            <button
              onClick={handleNext}
              className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
      
    );
  }
  