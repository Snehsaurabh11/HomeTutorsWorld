import { FaWhatsapp } from 'react-icons/fa';
import { APP_CONFIG } from '../constants/config';

/**
 * WhatsAppButton — fixed floating WhatsApp CTA.
 *
 * Phone number and default message are loaded from APP_CONFIG
 * (which reads from VITE_WHATSAPP_NUMBER and VITE_WHATSAPP_DEFAULT_MESSAGE).
 *
 * To change the number or message, update the .env file — no code change needed.
 */
export function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(APP_CONFIG.whatsappMessage);
  const whatsappUrl    = `https://wa.me/${APP_CONFIG.whatsapp}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-4
        sm:right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        px-4
        sm:px-5
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
      <FaWhatsapp size={22} />
      <span className="font-medium hidden sm:inline text-sm">
        WhatsApp Us
      </span>
    </a>
  );
}