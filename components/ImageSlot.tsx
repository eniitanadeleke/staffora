/**
 * Placeholder for photography that hasn't been supplied yet.
 * Replace with <img src="/images/your-photo.jpg" alt="..." /> once ready.
 */
type Props = { label: string; ratio?: string; src?: string; alt?: string };

export default function ImageSlot({ label, ratio = "4 / 5", src, alt = "" }: Props) {
  if (src) {
    return <img src={src} alt={alt} style={{ aspectRatio: ratio, objectFit: "cover", borderRadius: 28, width: "100%" }} />;
  }
  return (
    <div className="img-slot" style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder: ${label}`}>
      <img className="img-slot__mark" src="/brand/staffora-icon.svg" alt="" aria-hidden="true" />
      <span>Photo: {label}</span>
    </div>
  );
}
