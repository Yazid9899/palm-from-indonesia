"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import Form from "next/form";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;
    if (!firstName || !lastName || !email || !phone || !message) {
      setError("Please fill in all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        setResponseMessage(
          data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      console.log(error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#f6f2ea]">
        <div className="relative h-64">
          <Image
            src="/vanilla-banner.jpg"
            alt="Contact banner"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101510]/80 via-[#101510]/40 to-transparent" />
          <div className="container-main relative z-10 flex h-full flex-col justify-end pb-10">
            <p className="eyebrow text-[#f8d9a6]">Get in touch</p>
            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Contact Palm From Indonesia
            </h1>
          </div>
        </div>

        <div className="container-main section-pad">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Head office</p>
                <h2 className="display-2 mt-3">PT. Dua Zamrud Khatulistiwa</h2>
                <p className="lead mt-4">
                  If you have questions, requests, or need a quotation, send us
                  a message. We respond quickly and help with documentation,
                  samples, and logistics.
                </p>
              </div>
              <div className="grid gap-4 rounded-3xl bg-white/80 p-6 shadow-sm">
                <div className="flex items-start gap-3 text-sm text-[#3d352d]">
                  <Image
                    src="/location-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>
                    Jalan Zaitun 1 Blok B4 No.1, Islamic Village, Kab.
                    Tangerang, Banten, 15811, Indonesia
                  </p>
                </div>
                <a
                  className="flex items-center gap-3 text-sm text-[#3d352d] hover:text-[#1f3a2a]"
                  href="tel:+6281281748771"
                >
                  <Image src="/phone-icon.svg" alt="" width={18} height={18} />
                  +62 812 8174 8771
                </a>
                <a
                  className="flex items-center gap-3 text-sm text-[#3d352d] hover:text-[#1f3a2a]"
                  href="mailto:sales@palmfromindonesia.com"
                >
                  <Image src="/mail-icon.svg" alt="" width={18} height={18} />
                  sales@palmfromindonesia.com
                </a>
              </div>
            </div>

            <Form onSubmit={handleSubmit} className="soft-panel p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-[#8a7d6d]"
                  >
                    Message or request
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#1f3a2a]/10 bg-white px-4 py-3 text-sm text-[#1f1a14]"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {error && <p className="text-sm text-[#b35f2a]">{error}</p>}
                {responseMessage && (
                  <p className="text-sm text-[#1f3a2a]">{responseMessage}</p>
                )}
                <button type="submit" disabled={isSubmitting} className="btn-primary">
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
