import React from 'react';
import Input from './Input';

const AddressForm = ({ addressDetails, onAddressChange, errors = {} }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">Full Address</label>
        <Input
          name="full_address"
          value={addressDetails.full_address || ''}
          onChange={onAddressChange}
          placeholder="Enter your full address, street, apartment, etc."
          className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.full_address ? 'border-red-500' : ''}`}
        />
        {errors.full_address && <p className="text-red-500 text-xs mt-1">{errors.full_address}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">City</label>
          <Input
            name="city"
            value={addressDetails.city || ''}
            onChange={onAddressChange}
            placeholder="city"
            className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.city ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">State</label>
          <Input
            name="state"
            value={addressDetails.state || ''}
            onChange={onAddressChange}
            placeholder="state"
            className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.state ? 'border-red-500' : ''}`}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">Pincode</label>
          <Input
            name="pincode"
            value={addressDetails.pincode || ''}
            onChange={onAddressChange}
            placeholder="pincode"
            maxLength={6}
            pattern="[0-9]*"
            inputMode="numeric"
            className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 ${errors.pincode ? 'border-red-500' : ''}`}
          />
          {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddressForm;