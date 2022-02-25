/// <reference types="facebook-js-sdk" />
/// <reference types="facebook-pixel" />
/// <reference types="google.maps" />
/// <reference types="gtag.js" />

declare module "facebook-js-sdk";
declare module "facebook-pixel";
declare module "google.maps";
declare module "gtag.js";
// declare module "type-is";

interface Window {
  dataLayer?: object[];
}
