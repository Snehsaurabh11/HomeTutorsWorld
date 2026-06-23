import { cn } from '../utils/cn';
import logoSrc from '../assets/images/logo.png';
import { APP_CONFIG } from '../constants/config';

type LogoVariant = 'default' | 'white' | 'icon-only';
type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  /** Show image logo (true) or text-based fallback (false) */
  useImage?: boolean;
}

const sizeConfig: Record<LogoSize, { img: string; text: string; tagline: string }> = {
  sm:  { img: 'h-10',  text: 'text-sm',   tagline: 'text-[9px]'  },
  md:  { img: 'h-11',  text: 'text-base',  tagline: 'text-[10px]' },
  lg:  { img: 'h-13', text: 'text-lg',   tagline: 'text-xs'     },
  xl:  { img: 'h-16', text: 'text-xl',   tagline: 'text-sm'     },
};

/**
 * Logo — Reusable brand logo component
 *
 * Variants:
 * - 'default'   → full-color logo image (for light backgrounds)
 * - 'white'     → white logo image (for dark/purple backgrounds)
 * - 'icon-only' → only the icon/monogram part
 *
 * Usage:
 * <Logo />                          → default, md
 * <Logo variant="white" size="lg" />
 * <Logo variant="icon-only" size="sm" />
 */
export function Logo({
  variant = 'default',
  size = 'md',
  className,
  useImage = true,
}: LogoProps) {
  const config = sizeConfig[size];

  if (useImage && variant !== 'icon-only') {
    return (
      <div className={cn('flex items-center', className)}>
        <img
          src={logoSrc}
          alt={`${APP_CONFIG.displayName} — ${APP_CONFIG.tagline}`}
          className={cn(
            config.img,
            'w-auto object-contain',
            variant === 'white' && 'brightness-0 invert'
          )}
          draggable={false}
        />
      </div>
    );
  }

  // Text-based fallback (also used when useImage = false)
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Monogram icon */}
      <div
        className={cn(
          'rounded-full flex items-center justify-center font-display font-black',
          size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-11 h-11 text-base' : 'w-9 h-9 text-sm',
          variant === 'white'
            ? 'bg-white text-brand-purple'
            : 'bg-brand-purple text-white'
        )}
        aria-hidden="true"
      >
        H
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display font-black tracking-wide',
              config.text,
              variant === 'white' ? 'text-white' : 'text-brand-purple-dark'
            )}
          >
            {APP_CONFIG.displayName}
          </span>
          <span
            className={cn(
              'font-sans font-medium tracking-widest uppercase mt-0.5',
              config.tagline,
              variant === 'white' ? 'text-white/80' : 'text-neutral-500'
            )}
          >
            {APP_CONFIG.tagline}
          </span>
        </div>
      )}
    </div>
  );
}
