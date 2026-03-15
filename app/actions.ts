"use server";

/**
 * Reservation Action Handler
 * 
 * 🛠️ TEMPLATE USAGE GUIDE:
 * This server action currently acts as a mocked successful request.
 * To integrate this into a production environment, follow these steps:
 * 
 * 1. DATABASE: Uncomment the Prisma/Supabase section to save the lead.
 * 2. EMAIL: Use an API like Resend to email the restaurant host & guest.
 * 3. RESERVATION API: Use a fetch call to Resy / OpenTable webhooks to sync reservations.
 */
export async function createReservationAction(formData: FormData) {
    const date = formData.get("date");
    const party = formData.get("party");
    const time = formData.get("time");

    if (!date || !party || !time) {
        return { success: false, message: "Missing required reservation details." };
    }

    // 1. Simulate network delay (Remove this in production)
    await new Promise((resolve) => setTimeout(resolve, 800));

    /* --- PRODUCTION INTEGRATION EXAMPLES ---
    
    // Example: Save to Database (Prisma)
    // await prisma.reservation.create({
    //     data: { date: new Date(date), party: Number(party), time }
    // });

    // Example: Send Email Notification (Resend)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //     from: 'reservations@atelierorigine.com',
    //     to: 'host@atelierorigine.com',
    //     subject: `New Reservation Request`,
    //     html: `<p>Party of ${party} on ${date} at ${time}.</p>`
    // });
    */

    return {
        success: true,
        message: `Reservation confirmed for ${party} on ${date} at ${time}.`,
    };
}
