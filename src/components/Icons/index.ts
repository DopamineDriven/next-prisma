import CompanyScaffold from "./Company";
import CommerceScaffold from "./Commerce";
import DirectionalScaffold from "./Directional";

export { default as Commerce } from "./Commerce";
export { default as Company } from "./Company";
export { default as Directional } from "./Directional";
export { default as Dashboard } from "./Dashboard";
export {default as Analytics} from "./analytics"
export { default as BellIcon } from "./bell";
export { default as Clock } from "./clock";
export { default as Engagement } from "./engagement";
export { default as HorizontalWave } from "./horizontal-wave";
export { default as LockClosedIcon } from "./lock-closed";
export { default as Mail } from "./mail";
export { default as MenuIcon } from "./menu-icon";
export { default as PaperClip } from "./paper-clip";
export { default as Phone } from "./phone";
export { default as Search } from "./search";
export { default as Users } from "./users";
export { default as XIcon } from "./x-icon";
export { default as Vercel } from "./vercel";
export const { ApplePay, Basket, Cart, SpotCard } = CommerceScaffold;
export const {
  Discord,
  Facebook,
  GitHub,
  Google,
  Hubspot,
  Instagram,
  LinkedIn,
  StackOverflow,
  TypeScript,
  Twitter,
  YouTube
} = CompanyScaffold;
export const {
  Arrow,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  DownArrow,
  NavArrow,
  UpArrow
} = DirectionalScaffold;
