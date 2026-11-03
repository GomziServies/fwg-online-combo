/**
 * FG Group CRM tracking for this site: cookie banner, visitor tracker, and the link that makes an inquiry and the
 * visitor's browsing one lead. Site key 'fwg-online-combo' is registered in fg-api src/config/website-sources.js, which
 * sends this site's leads to the FWG section of the CRM. How it works: ./fg-crm-tracking.js
 */
import apiConfig from '../config/apiConfig';
import { publicAxiosInstance } from '../config/api';
import { initCrmTracking, attachToAxios } from './fg-crm-tracking';

initCrmTracking({
  apiBase: apiConfig.BASE_URL,
  siteKey: 'fwg-online-combo',
  brand: 'Fitness With Gomzi',
  accent: '#ff6600',
  profileKeys: [],
});

// every POST /contact-inquiry carries the visitor id, so the inquiry joins the visitor's lead
attachToAxios(publicAxiosInstance);
