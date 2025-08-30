import GalleryGrid from 'components/GalleryGrid'

export default function Gallery() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-heading text-5xl text-white">Gallery</h1>
      </div>
      <GalleryGrid />
    </main>
  )
}
