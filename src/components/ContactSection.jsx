import { Github, Linkedin, Mail, MapPin, Send, Smartphone } from "lucide-react";

const contactMethods = [
  {
    id: "linkedin",
    label: "LINKEDIN",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harshini-sanjana-j/",
    detail: "@harshini-sanjana-j",
  },
  {
    id: "email",
    label: "EMAIL",
    icon: Mail,
    href: "mailto:j.harshinisanjana@gmail.com",
    detail: "j.harshinisanjana@gmail.com",
  },
  {
    id: "github",
    label: "GITHUB",
    icon: Github,
    href: "https://github.com/harshinisanjana",
    detail: "@harshinisanjana",
  },
];

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const mailtoLink = `mailto:j.harshinisanjana@gmail.com?subject=Portfolio Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="newsprint-section border-x-1 lg:border-x-0 relative overflow-hidden bg-[#F5F5F3]">
      <div className="absolute inset-0 bauhaus-dot-grid opacity-5 pointer-events-none" />

      {/* Top Banner Ticker */}
      <div className="border-y-2 border-ink-black py-2 mb-16 overflow-hidden bg-white">
        <div className="whitespace-nowrap flex gap-8 animate-[marquee_20s_linear_infinite]">
          {[1, 2, 3].map((n) => (
            <span key={n} className="newsprint-mono text-[9px] uppercase tracking-widest text-neutral-400">
              ESTABLISH CONTACT • OPEN CORRESPONDENCE • SEND INQUIRY • EDITORIAL OFFICE • COIMBATORE INSTITUTE OF TECHNOLOGY • COIMBATORE EDITION
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Office Information (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="newsprint-display text-5xl md:text-6xl mb-8 leading-tight">THE OFFICE <br /> OF SANJANA.</h2>
            <p className="font-serif-body text-lg justified mb-10 text-neutral-600">
              For any editorial inquiries, technical collaborations, or professional opportunities, please reach out via the official channels listed. We aim for prompt correspondence within one production cycle.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border-1 border-ink-black flex items-center justify-center bg-white group-hover:bg-ink-black group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="newsprint-label text-[10px]">CURRENT LOCATION</p>
                  <p className="newsprint-mono text-sm">COIMBATORE, TAMIL NADU, INDIA</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border-1 border-ink-black flex items-center justify-center bg-white group-hover:bg-editorial-red group-hover:text-white transition-all">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="newsprint-label text-[10px]">PHONE / MOBILE</p>
                  <p className="newsprint-mono text-sm">+91 — 9363635966</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t-1 border-ink-black border-dashed">
            <p className="newsprint-mono text-[10px] text-neutral-400">
              PRINTED IN COIMBATORE. COPYRIGHT 2025. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

        {/* Right: Correspondence Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 p-8 border-4 border-ink-black bg-white newsprint-texture hard-shadow-hover transition-all">
            <h3 className="newsprint-label border-b-2 border-ink-black pb-2 mb-6 flex items-center justify-between">
              <span>LETTER TO THE EDITOR / CONTACT FORM</span>
              <Send size={16} />
            </h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME / SENDER"
                  className="border-b-2 border-ink-black bg-transparent py-2 newsprint-mono focus:bg-neutral-100 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL / RETURN ADDR"
                  className="border-b-2 border-ink-black bg-transparent py-2 newsprint-mono focus:bg-neutral-100 outline-none"
                  required
                />
              </div>
              <textarea
                rows="4"
                name="message"
                placeholder="MESSAGE / INQUIRY..."
                className="border-b-2 border-ink-black bg-transparent py-2 newsprint-mono focus:bg-neutral-100 outline-none resize-none"
                required
              />
              <button type="submit" className="newsprint-btn py-4 justify-center text-sm font-bold">
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>

          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="p-6 border-1 border-ink-black bg-white flex flex-col justify-between hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#111] transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 border-1 border-ink-black bg-neutral-100 group-hover:bg-editorial-red group-hover:text-white transition-colors">
                  <method.icon size={20} />
                </div>
                <span className="newsprint-mono text-[9px] opacity-30 tracking-tighter">0{contactMethods.indexOf(method) + 1}</span>
              </div>
              <div>
                <p className="newsprint-label text-[9px] mb-1">{method.label}</p>
                <p className="newsprint-mono text-xs font-bold truncate">{method.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
