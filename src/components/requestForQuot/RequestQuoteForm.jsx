import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageUploader from "./uploaImages";
import Toast from "./toast";
import SummaryStep from "./summary";
import { NijaStates, uploadImage, uploadRfq } from "../../../apis/apiCall";
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaPlus, FaShoppingCart } from "react-icons/fa";

const RequestQuoteForm = ({handleRfqPopup}) => {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState(NijaStates)

  const [editIndex, setEditIndex] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    images: [],
    previeImages: [],
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "Lagos",
  });
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  const handleImageUpload =async (products) => {
    const updatedProducts = [];
    for (const product of products) {
      const uploadedImages = await Promise.all(
        product.images.map(async (img) => {
          if (img && img.name) {
            const formData = new FormData();
            formData.append("file", img);
            const data = await uploadImage(formData)
            return data?.filename;
          }
          return img
       
        })
      );
      updatedProducts.push({
        ...product,
        images: uploadedImages,
      });
      setProducts(updatedProducts)
    }
  };

  const handleAddOrUpdateProduct = () => {
    if (!currentProduct.name.trim()) {
        showToast("error", "Enter product name first")
        return ;
    }
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = currentProduct;
      setProducts(updated);
      handleImageUpload(updated)
      setEditIndex(null);
      showToast("success", "Item updated successful ✅")
    } else {
      const newProducts = [...products, currentProduct];
      setProducts(newProducts);
      handleImageUpload(newProducts)
     showToast("success", "Item added to cart ✅")
    }
    setCurrentProduct({
      name: "",
      description: "",
      quantity: "",
      images: [],
      previeImages:[]
    });
  };

  const handleEditProduct = (index) => {
    setCurrentProduct(products[index]);
    setEditIndex(index);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const handleNext = () => {
    if (step === 1 && products.length === 0)
    return showToast("error", "Add at least one product first");
    setStep((s) => Math.min(3, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!customerInfo.name.trim() || !customerInfo.phone.trim() || !customerInfo.email.trim() || !customerInfo.address.trim()) {
      showToast("error", "Please fill all required fields (Name, Email, Phone, and State)");
      return;
    }
    setIsLoading(true);

    try {
      const data = await uploadRfq({customer:customerInfo,products} )
      setIsLoading(false)
      setStep(1)
      setCustomerInfo({ name: "", phone: "", email: "", address: "" });
      setCurrentProduct({name: "",description: "",quantity: "",images: [], previeImages:[]});
      setProducts([])
      return showToast("success", "Quotation Request Submitted Successfully ✅")
    } catch (error) {
      setIsLoading(false);
      showToast("error", "Something went wrong, please try again");
    }

  };

  return (
    <div className=" text-black w-auto max-w-4xl px-1 z-50 relative rounded-2xl shadow-lg">
    <div className="relative flex flex-col order-2 md:order-1">
    <div className="max-w-full sm:max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-8 justify-self-center">
       <div className="flex items-center justify-between  border-b">
          <h2 className="text-xl md:text-2xl font-bold">
            Request for Quotation
            <div className="relative inline-flex  float-right">
              <FaShoppingCart className="text-orange-600 text-xl m-1" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {products?.length || 0}
              </span>
            </div>
          </h2>
          <button
            onClick={handleRfqPopup}
            className="text-red-500 hover:text-red-600 transition z-50"
          >
            <IoIosCloseCircle size={36} />
          </button>
        </div>
      <div className="flex sm:flex-row items-center sm:justify-center gap-3 sm:gap-6 mb-6 pt-5">
        {["Products", "Summary", "Customer Info"].map((label, idx) => {
          const n = idx + 1;
          return (
            <div key={label} className="flex items-center">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-sm font-bold ${
                  step >= n ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {n}
              </div>
              <span className={`ml-2 mr-3 text-sm sm:text-base ${step >= n ? "text-orange-600" : "text-gray-400"} hidden xs:inline sm:inline`}>
                {label}
              </span>
              {idx < 2 && (
                <div className={`hidden sm:block w-12 h-[2px] ${step > n ? "bg-orange-600" : "bg-gray-300"}`} />
              )}
            </div>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
          >
            <div className="space-y-4">
            <div className="max-h-[60vh] overflow-y-auto p-5 space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={currentProduct.name}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, name: e.target.value })
                }
                className="w-full p-3 border rounded-lg text-sm"
              />
              <textarea
                placeholder="Description"
                value={currentProduct.description}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, description: e.target.value })
                }
                className="w-full p-3 border rounded-lg text-sm min-h-[100px] resize-none"
              />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={currentProduct.quantity}
                  onChange={(e) =>
                    setCurrentProduct({ ...currentProduct, quantity: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg text-sm"
                />
               <ImageUploader showToast={showToast} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
               </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-between mt-4">
            <button
                onClick={handleAddOrUpdateProduct}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm"
            >
                <FaPlus /> {editIndex !== null ? "Update Product" : "Add to Cart"}
            </button>

            <button
                onClick={handleNext}
                className="w-full sm:w-auto bg-gray-800 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2"
            >
                Next <FaArrowRight />
            </button>
            </div>
        </div>
        </motion.div>
        )}
        {step === 2 && (
            <SummaryStep products={products} handleEditProduct={handleEditProduct} handleNext={handleNext} handleBack={handleBack} handleDeleteProduct={handleDeleteProduct}/>
        
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Customer Information</h2>

            <div className="space-y-3">
            <div className="max-h-[60vh] overflow-y-auto p-5 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="w-full p-3 border rounded-lg text-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                className="w-full p-3 border rounded-lg text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className="w-full p-3 border rounded-lg text-sm"
              />
              <select name="" id="" value={customerInfo.address}  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} className="w-full p-3 border rounded-lg text-sm  resize-none">
                {states?.map((element, index) => (
                <option key={element.value} value={element.value}>
                  {element.text}
                </option>
              ))}
                <option value="" NijaStates></option>
              </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
                >
                  <FaArrowLeft /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition-all duration-200
                    ${isLoading ? "bg-orange-400 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"}
                  `}
                >
                  {isLoading && (
                    <span
                      className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    ></span>
                  )}
                  <span>{isLoading ? "Submitting..." : "Submit Request"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
    <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default RequestQuoteForm;