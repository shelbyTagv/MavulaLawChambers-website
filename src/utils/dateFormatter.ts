/**
 * Format a date string to a readable format
 * Handles both ISO dates (YYYY-MM-DD) and month/year strings (e.g., "March 2026")
 */
export function formatDate(dateString: string): string {
  // Try to parse as ISO date first (YYYY-MM-DD)
  const isoRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (isoRegex.test(dateString)) {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  }

  // Return as-is if it's already a readable format (e.g., "March 2026")
  return dateString;
}
