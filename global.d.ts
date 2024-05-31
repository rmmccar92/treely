// global.d.ts
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

interface RequireContext {
  keys: () => string[];
  <T>(id: string): T;
}

declare function requireContext(
  path: string,
  deep?: boolean,
  filter?: RegExp
): RequireContext;
