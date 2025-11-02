/**
 * Utility function to handle paths with basePath
 * This ensures all assets are correctly prefixed with the basePath
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/';

/**
 * Prefixes a path with the basePath
 * @param {string} path - The path to prefix (e.g., '/image.png')
 * @returns {string} - The prefixed path (e.g., '/image.png')
 */
export function getAssetPath(path) {
  // If path already includes basePath, return as is
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  // If path starts with '/', remove it before adding basePath
  if (path.startsWith('/')) {
    return BASE_PATH + path;
  }
  // Otherwise, add basePath with a slash
  return BASE_PATH + '/' + path;
}

