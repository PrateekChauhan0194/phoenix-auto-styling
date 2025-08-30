import { site } from '../config/site'
import { whatsappLink } from '../utils/whatsapp'

export default function CTASticky() {
  const wLink = whatsappLink(site.phone, "Hi Phoenix Auto Styling, I'd like a quote for wraps/tint.");
  return (
    <div className="fixed bottom-6 right-4 md:right-6 flex gap-3 z-50">
      <a href={wLink} target="_blank" className="px-4 py-3 rounded-2xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">
        WhatsApp Quote
      </a>
      <a href="/contact" className="px-4 py-3 rounded-2xl bg-graphite text-white border border-silver/20 hover:border-ember transition">
        Get a Quote
      </a>
    </div>
  )
}
