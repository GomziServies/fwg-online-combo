import Container from "../components/layout/Container";
import AnnouncementBar from "./AnnouncementBar";

const PrivacyPolicy = () => {
  return (
    <>
    {/* Top-logo */}
      <AnnouncementBar />
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl text-gray-800">
          {/* Title */}
          <h1 className="mb-6 font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy - Ignite Fat Burner
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            At <strong>Ignite Fat Burner - Fitness With Gomzi</strong>, we respect
            your privacy and are committed to protecting the personal information
            you share with us. This Privacy Policy explains how we collect, use,
            store, and protect your data when you visit our website or purchase
            our products.
          </p>

          <p className="mb-8 text-gray-600">
            By using our website or placing an order, you agree to the terms
            mentioned below.
          </p>

          {/* Section */}
          <div className="space-y-8">
            {/* 1 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                1. Information We Collect
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Shipping Address</li>
              </ul>
              <p className="mt-3 text-gray-600">
                We do not store your payment card or banking details.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>Process and confirm orders</li>
                <li>Send the FREE Fitness Blueprint e-Book</li>
                <li>Ship Ignite Fat Burner to your address</li>
                <li>Send delivery and order updates</li>
                <li>Improve customer experience</li>
              </ul>
              <p className="mt-3 font-medium text-gray-800">
                We never sell or rent your personal data.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                3. Digital Product Delivery (E-Book)
              </h2>
              <p className="text-gray-700">
                The Fitness Blueprint e-Book is delivered instantly via email
                after payment.
              </p>
              <p className="mt-2 text-gray-700">
                Digital products are non-refundable and non-transferable.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                4. Product Shipping & Delivery
              </h2>
              <p className="text-gray-700">
                Ignite Fat Burner is shipped to the address provided at checkout.
                Delivery time is usually <strong>7 to 14 working days</strong>.
              </p>

              <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="font-semibold text-gray-900">
                  Important Address Responsibility:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-700">
                  <li>
                    If an incorrect address is provided or the customer is
                    unavailable at delivery, the parcel will be returned.
                  </li>
                  <li>The order will not be re-shipped.</li>
                  <li>The order amount is non-refundable in such cases.</li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                5. Packing Video Proof
              </h2>
              <p className="text-gray-700">
                We record a packing video before dispatch. This video may be
                shared on the customer's registered WhatsApp or mobile number
                for transparency and proof of dispatch.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                6. No Refund & No Return Policy
              </h2>
              <p className="text-gray-700 font-medium">
                No refunds, no returns, or cancellations are allowed once the
                order is placed.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                7. Data Security
              </h2>
              <p className="text-gray-700">
                We take reasonable steps to protect your data but cannot
                guarantee complete security.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                8. Third-Party Services
              </h2>
              <p className="text-gray-700">
                We use trusted third-party services for payment, shipping, and
                communication.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                9. Marketing Communication
              </h2>
              <p className="text-gray-700">
                Customers may receive order-related and promotional
                communication. Unsubscribe options are available.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                10. Contact Information
              </h2>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:fitnesswithgomzi@gmail.com"
                  className="font-medium text-[#ff6600]"
                >
                  fitnesswithgomzi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
};

export default PrivacyPolicy;
