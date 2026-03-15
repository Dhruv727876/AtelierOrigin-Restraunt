"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import checkLottie from "@/data/check-lottie.json";
import { availableTimes } from "@/data/site";
import { createReservationAction } from "@/lib/actions";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const dates = ["Thu 14", "Fri 15", "Sat 16"];
const partySizes = ["2 guests", "4 guests", "6 guests"];

interface ReservationSectionProps {
    reducedMotion: boolean;
}

export function ReservationSection({ reducedMotion }: ReservationSectionProps) {
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedParty, setSelectedParty] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [announcement, setAnnouncement] = useState("");
    const [isPending, setIsPending] = useState(false);

    const reservationReady = Boolean(selectedDate && selectedParty);

    const confirmReservation = async () => {
        if (!selectedDate || !selectedParty || !selectedTime) {
            setAnnouncement("Please select a date, party size, and time.");
            return;
        }

        setIsPending(true);
        setAnnouncement("Confirming your reservation...");

        const formData = new FormData();
        formData.append("date", selectedDate);
        formData.append("party", selectedParty);
        formData.append("time", selectedTime);
        formData.append("name", guestName);
        formData.append("email", guestEmail);

        const result = await createReservationAction(formData);

        setIsPending(false);
        setAnnouncement(result.message);
    };

    return (
        <section className="reservation section" id="reserve">
            <div className="section-heading section-heading--split">
                <div>
                    <span className="eyebrow">Reserve a seat</span>
                    <div className="mask-text">
                        <motion.h2
                            initial={reducedMotion ? { opacity: 1 } : { y: "100%" }}
                            whileInView={reducedMotion ? { opacity: 1 } : { y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            One seating per evening. Yours to hold.
                        </motion.h2>
                    </div>
                </div>
                <motion.p
                    className="section-heading__body"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15, ease: entranceEase }}
                >
                    No credit card required. We hold your table for 15 minutes and confirm within the hour.
                </motion.p>
            </div>
            <div className="reservation-grid">
                <motion.div 
                    className="glass-panel reservation-panel"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.85, ease: entranceEase }}
                >
                    <div className="control-group">
                        <span>Date</span>
                        <div className="segmented-grid">
                            {dates.map((date) => (
                                <button
                                    key={date}
                                    type="button"
                                    className={`segment ${selectedDate === date ? "is-active" : ""}`}
                                    onClick={() => setSelectedDate(date)}
                                    data-cursor="interactive"
                                >
                                    {date}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="control-group">
                        <span>Party size</span>
                        <div className="segmented-grid segmented-grid--compact">
                            {partySizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    className={`segment ${selectedParty === size ? "is-active" : ""}`}
                                    onClick={() => setSelectedParty(size)}
                                    data-cursor="interactive"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence initial={false}>
                        {reservationReady && (
                            <motion.div
                                key={`${selectedDate}-${selectedParty}`}
                                className="availability-panel"
                                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
                                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
                                transition={{ duration: 0.4, ease: entranceEase }}
                            >
                                <span className="availability-panel__label">Available times</span>
                                <div className="time-grid">
                                    {availableTimes.map((time, index) => (
                                        <motion.button
                                            key={time}
                                            type="button"
                                            className={`segment ${selectedTime === time ? "is-active" : ""}`}
                                            onClick={() => setSelectedTime(time)}
                                            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                                            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                                            transition={{ duration: 0.28, delay: index * 0.04, ease: entranceEase }}
                                            data-cursor="interactive"
                                        >
                                            {time}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="control-group" style={{ marginTop: "1rem" }}>
                        <label htmlFor="guest-name">Your name</label>
                        <input
                            id="guest-name"
                            type="text"
                            className="reservation-input"
                            placeholder="First and last name"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                        />
                    </div>
                    <div className="control-group">
                        <label htmlFor="guest-email">Email</label>
                        <input
                            id="guest-email"
                            type="email"
                            className="reservation-input"
                            placeholder="For confirmation note"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="glass-panel confirmation-panel"
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.85, ease: entranceEase }}
                >
                    <div className="confirmation-panel__badge">
                        {reducedMotion ? (
                            <div className="steam-static" aria-hidden />
                        ) : (
                            <div className="confirmation-panel__lottie">
                                <Lottie animationData={checkLottie} loop={false} />
                            </div>
                        )}
                    </div>
                    <h3>Hold the room.</h3>
                    <p>
                        A host confirms your table within the hour — then follows up with pacing notes and an optional sommelier pairing card.
                    </p>
                    <button
                        type="button"
                        className="button button--primary button--full"
                        onClick={confirmReservation}
                        disabled={isPending}
                        data-cursor="interactive"
                    >
                        {isPending ? "Confirming..." : "Confirm reservation"}
                    </button>
                    <p className="confirmation-panel__microcopy">Walk-ins welcome at the counter after 9:15 PM — no reservation required.</p>
                    <div className="sr-only" aria-live="polite">
                        {announcement}
                    </div>
                    {announcement && <p className="confirmation-panel__status">{announcement}</p>}
                </motion.div>
            </div>
        </section>
    );
}
