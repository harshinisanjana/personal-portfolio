import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Copy, Check, ArrowUpRight, Send } from "lucide-react";

export const ContactView = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Message from ${encodeURIComponent(
      name
    )}&body=From: ${encodeURIComponent(name)} (${encodeURIComponent(
      email
    )})%0D%0A%0D%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-8 sm:pt-14 space-y-12 max-w-2xl view-enter">
      {/* Header */}
      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <p className="text-[11px] uppercase tracking-widest font-mono text-[#71717a]">
          CONTACT
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ededed] tracking-tight">
          Get in touch
        </h1>
        <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
          Feel free to reach out if you'd like to talk about software projects, internships, or just connect.
        </p>
      </div>

      {/* Direct Channels */}
      <div className="space-y-5">
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-mono text-[#71717a] block">
            Email
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-base sm:text-lg font-medium text-[#ededed] hover:underline transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="text-xs px-2.5 py-1 rounded-md border border-white/[0.1] hover:bg-white/[0.04] text-[#a1a1aa] hover:text-[#ededed] flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check size={11} className="text-emerald-400" /> <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={11} /> <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-3 text-xs font-medium border-t border-white/[0.08]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-[#ededed] flex items-center gap-1 transition-colors font-mono"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-[#ededed] flex items-center gap-1 transition-colors font-mono"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
          <span className="text-[#71717a] font-mono">
            Location: {PERSONAL_INFO.location}
          </span>
        </div>
      </div>

      {/* Message Form */}
      <div className="pt-6 border-t border-white/[0.08] space-y-5">
        <h2 className="text-lg font-bold text-[#ededed]">
          Send a quick message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[#71717a]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3.5 py-2.5 rounded-lg border border-white/[0.1] bg-[#0c0d11] text-[#ededed] focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[#71717a]">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3.5 py-2.5 rounded-lg border border-white/[0.1] bg-[#0c0d11] text-[#ededed] focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[#71717a]">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-3.5 py-2.5 rounded-lg border border-white/[0.1] bg-[#0c0d11] text-[#ededed] focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold cursor-pointer transition-colors flex items-center gap-2"
          >
            <Send size={13} />
            <span>Send Message</span>
          </button>

          {formSubmitted && (
            <p className="text-xs text-emerald-400">
              Your default email app has opened with your draft.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
