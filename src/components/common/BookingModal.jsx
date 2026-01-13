import React, { useState } from 'react';
import Modal from './Modal';
import Input from './Input';
import AddressForm from './AddressForm';
import { publicAxiosInstance } from '../../config/api';
import apiConfig from '../../config/apiConfig';

import { useEffect } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  
  const [addressDetails, setAddressDetails] = useState({
    full_address: '',
    city: '',
    state: '',
    pincode: '',
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!userDetails.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!userDetails.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(userDetails.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!addressDetails.full_address.trim()) {
      newErrors.full_address = 'Full address is required';
    }
    
    if (!addressDetails.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!addressDetails.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!addressDetails.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(addressDetails.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const options = {
        key: apiConfig.RAZORPAY_MERCHANT_ID,
        amount: 2599 * 100, // amount in paisa (₹2,599)
        currency: "INR",
        name: "FG Group",
        description: "Online Combo Course",
        handler: async function (response) {
          try {
            // Show immediate confirmation
            setLoading(true);
            
            const result = await publicAxiosInstance.post('/guest-payment/online-combo-booking', {
              payment_id: response.razorpay_payment_id,
              name: userDetails.name,
              email: userDetails.email,
              mobile: userDetails.mobile,
              full_address: addressDetails.full_address,
              city: addressDetails.city,
              state: addressDetails.state,
              pincode: addressDetails.pincode,
            });

            if (result.data.success || result.data.status === 200) {
              onClose();
              // Reset form fields after successful payment
              setUserDetails({
                name: '',
                email: '',
                mobile: '',
              });
              setAddressDetails({
                full_address: '',
                city: '',
                state: '',
                pincode: '',
              });
              setErrors({});
              setIsThankYouModalOpen(true);
              setLoading(false);
            }
          } catch (error) {
            setLoading(false);
            alert(
              error.response?.data?.message ||
              "Payment verification failed. Please contact support."
            );
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.mobile,
        },
        theme: {
          color: "#FF6600",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert(error.response?.data?.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('booking-modal-open');
      // Clear any previous errors when opening
      setErrors({});
    } else {
      document.body.classList.remove('booking-modal-open');
    }
    
    return () => {
      document.body.classList.remove('booking-modal-open');
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setUserDetails({
        name: '',
        email: '',
        mobile: '',
      });
      setAddressDetails({
        full_address: '',
        city: '',
        state: '',
        pincode: '',
      });
      setErrors({});
    }
  }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Reserve Your Seat - Online Combo Course"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 flex flex-col items-center bg-gradient-to-b from-orange-50 to-orange-100 rounded-2xl p-6 shadow-sm">
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src="https://fggroup.in/assets/images/img/gomzi.webp"
                alt="logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
              Secure Your Spot
            </h3>
            <p className="mt-2 text-sm text-gray-800 text-center leading-relaxed">
              Fill in your details to reserve your seat.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Full name
                </label>
                <Input
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Mobile
                </label>
                <Input
                  name="mobile"
                  type="tel"
                  value={userDetails.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.mobile ? 'border-red-500' : ''}`}
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Address Details</h4>
              <AddressForm 
                addressDetails={addressDetails} 
                onAddressChange={handleAddressChange} 
                errors={errors}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-500">
                🔒 100% • Secure payment 
              </p>
              <button
                onClick={handlePayment}
                disabled={loading}
                className={`px-6 py-2 rounded-xl font-medium shadow-md transition flex items-center justify-center ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Pay ₹2,599"}
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isThankYouModalOpen}
        onClose={() => {
          document.body.classList.remove('booking-modal-open');
          setIsThankYouModalOpen(false);
        }}
        title="Thank you!"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            You're all set!
          </h3>
          <p className="text-sm text-gray-800 max-w-sm">
            Payment received. Our team will reach out to you shortly with course access details.
          </p>
          <div className="w-full flex justify-center">
            <button 
              onClick={() => setIsThankYouModalOpen(false)}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookingModal;