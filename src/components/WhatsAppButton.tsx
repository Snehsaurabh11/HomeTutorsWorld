import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/919523964026?text=Hi%20HomeTutorsWorld,%20I%20am%20interested%20in%20your%20tuition%20services.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        px-5
        py-3
        bg-green-500
        text-white
        shadow-lg
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <FaWhatsapp size={24} />
      <span className="font-medium hidden sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}