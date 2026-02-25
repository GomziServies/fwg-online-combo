const hostname = window.location.hostname.trim();
let baseUrl = "http://localhost:80";
let razorpayMerchantId = "rzp_test_30yX9clPnr0rM1";

if (
    hostname === "ignitefitbodyplan.fggroup.in" ||
    hostname === "www.ignitefitbodyplan.fggroup.in"
) {
    baseUrl = "https://api.fggroup.in";
    razorpayMerchantId = "rzp_live_WxBhDlHqqY0CYX";
} else if (hostname === "test.ignitefitbodyplan.fggroup.in") {
    baseUrl = "https://dev-api.fggroup.in";
} else {
    baseUrl = "https://dev-api.fggroup.in";
    // baseUrl = "http://localhost:80";
}

export const RAZORPAY_MERCHANT_ID = razorpayMerchantId;

const apiConfig = {
    BASE_URL: baseUrl,
    RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;