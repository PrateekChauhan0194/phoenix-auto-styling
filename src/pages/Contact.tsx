import ContactForm from 'components/ContactForm'
import { site } from '../config/site'

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-heading text-5xl text-white">Contact</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-3 text-silver/90">
          <p>Phone: <a className="hover:text-ember" href={"tel:" + site.phone}>{site.phone}</a></p>
          <p>Instagram: <a className="hover:text-ember" href={site.instagram} target="_blank">Follow us</a></p>
          <p>Facebook: <a className="hover:text-ember" href={site.facebook} target="_blank">Like our page</a></p>
          <p>Email: <a className="hover:text-ember" href={"mailto:" + site.email}>{site.email}</a></p>
          <p>Address: {site.address}</p>
          <div className="rounded-xl border border-graphite p-4">
            <div className="text-xs uppercase tracking-wide text-silver/70 mb-2">Studio Map</div>
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
              <iframe
                title="Map: 21 Hemsworth St, Donnybrook VIC 3064"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent('21 Hemsworth St, Donnybrook VIC 3064')}&output=embed`}
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-silver/60">Tap map to open in Google Maps.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
