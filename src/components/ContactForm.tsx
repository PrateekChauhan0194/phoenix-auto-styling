import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { site } from '../config/site'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string(),
  make: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    // Fallback: open mail client with prefilled body
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nCar: ${data.make} ${data.model} ${data.year}\n\n${data.message || ''}`
    )
    window.location.href = `mailto:${site.email}?subject=New quote request&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name</label>
          <input {...register('name')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input {...register('email')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input {...register('phone')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
          {errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm">Service</label>
          <select {...register('service')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2">
            <option>Full Color Change Wrap</option>
            <option>Partial / Accents</option>
            <option>Window Tint</option>
            <option>PPF Add-on</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Make</label>
          <input {...register('make')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
        </div>
        <div>
          <label className="text-sm">Model</label>
          <input {...register('model')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
        </div>
        <div>
          <label className="text-sm">Year</label>
          <input {...register('year')} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
        </div>
      </div>
      <div>
        <label className="text-sm">Message</label>
        <textarea {...register('message')} rows={4} className="w-full mt-1 rounded-lg bg-onyx/60 border border-graphite p-2" />
      </div>
      <button disabled={isSubmitting} className="px-5 py-3 rounded-2xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </button>
      <p className="text-xs text-silver/60 mt-2">Submitting will open your email client prefilled—hook this up to a serverless email/CRM when ready.</p>
    </form>
  )
}
