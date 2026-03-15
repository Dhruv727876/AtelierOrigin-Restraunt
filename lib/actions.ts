/**
 * Reservation Action Handler (Frontend Mock)
 * 
 * 🛠️ DEMPLATE USAGE NOTE:
 * This was previously a "Server Action", but has been converted to a 
 * frontend-only mock to support static hosting (GitHub Pages).
 */
export async function createReservationAction(formData: FormData) {
    const date = formData.get("date");
    const party = formData.get("party");
    const time = formData.get("time");

    if (!date || !party || !time) {
        return { success: false, message: "Missing required reservation details." };
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
        success: true,
        message: `Reservation confirmed for ${party} on ${date} at ${time}.`,
    };
}
