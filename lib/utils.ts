/**
 * Prefix a path with the base path for GitHub Pages compatibility.
 */
export function getAssetPath(src: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    if (src.startsWith("/") && !src.startsWith(basePath)) {
        return `${basePath}${src}`;
    }
    return src;
}
