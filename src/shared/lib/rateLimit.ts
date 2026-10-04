/**
 * Lightweight, edge-compatible sliding window rate limiter for Next.js API routes.
 * Prevents endpoint abuse, brute-forcing, and DDoS attacks.
 */

interface RateLimitRecord {
  count: number;
  expiresAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Cleanup expired entries every minute
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      if (record.expiresAt <= now) {
        rateLimitStore.delete(key);
      }
    }
  }, 60000);
}

export function rateLimit(
  identifier: string,
  action: string = 'global',
  limit: number = 30,
  windowMs: number = 60000
): { success: boolean; limit: number; remaining: number } {
  const key = `${action}:${identifier}`;
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || record.expiresAt <= now) {
    rateLimitStore.set(key, { count: 1, expiresAt: now + windowMs });
    return { success: true, limit, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, limit, remaining: 0 };
  }

  record.count += 1;
  return { success: true, limit, remaining: limit - record.count };
}
