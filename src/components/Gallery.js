function importAll(r) {
  return r.keys().map(r);
}

const galleryImages = importAll(require.context('../Images/GalleryImages', false, /\.(png|jpe?g|svg|avif)$/));

export default galleryImages;