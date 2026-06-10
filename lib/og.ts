export async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(5000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ??
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    const raw = match?.[1] ?? null;
    if (!raw) return null;
    // resolve relative URLs
    if (raw.startsWith("http")) return raw;
    const base = new URL(url);
    return new URL(raw, base.origin).href;
  } catch {
    return null;
  }
}
