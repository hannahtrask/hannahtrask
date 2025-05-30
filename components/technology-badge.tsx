import {
  siWordpress,
  siShopify,
  siWoocommerce,
  siGravityforms,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siMongodb,
  siPostgresql,
  siStripe,
  siMailchimp,
} from 'simple-icons'

interface TechnologyBadgeProps {
  technology: string
  variant?: 'default' | 'primary' | 'overlay'
  size?: 'sm' | 'md' | 'lg'
}

const technologyIcons: Record<string, any> = {
  WordPress: siWordpress,
  Shopify: siShopify,
  WooCommerce: siWoocommerce,
  'Gravity Forms': siGravityforms,
  React: siReact,
  'Next.js': siNextdotjs,
  'Tailwind CSS': siTailwindcss,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'Node.js': siNodedotjs,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  Stripe: siStripe,
  Mailchimp: siMailchimp,
  Elementor: {
    path: 'M.2 0h23.6v24H.2V0zm4.8 4.8v14.4h4.8V4.8H5zm9.6 0v14.4h4.8V4.8h-4.8z',
  }, // Custom Elementor path
  'Elementor Pro': {
    path: 'M.2 0h23.6v24H.2V0zm4.8 4.8v14.4h4.8V4.8H5zm9.6 0v14.4h4.8V4.8h-4.8z',
  },
  'Yoast SEO': {
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.794c-.478 1.196-1.315 2.21-2.394 2.897-.539.343-1.117.61-1.725.794-.304.092-.616.164-.932.216-.158.026-.317.047-.477.063-.08.008-.16.014-.241.018-.04.002-.081.003-.121.004-.02 0-.04.001-.06.001-.02 0-.04-.001-.06-.001-.04-.001-.081-.002-.121-.004-.081-.004-.161-.01-.241-.018-.16-.016-.319-.037-.477-.063-.316-.052-.628-.124-.932-.216-.608-.184-1.186-.451-1.725-.794-1.079-.687-1.916-1.701-2.394-2.897-.239-.598-.359-1.238-.359-1.888 0-.65.12-1.29.359-1.888.478-1.196 1.315-2.21 2.394-2.897.539-.343 1.117-.61 1.725-.794.304-.092.616-.164.932-.216.158-.026.317-.047.477-.063.08-.008.16-.014.241-.018.04-.002.081-.003.121-.004.02 0 .04-.001.06-.001.02 0 .04.001.06.001.04.001.081.002.121.004.081.004.161.01.241.018.16.016.319.037.477.063.316.052.628.124.932.216.608.184 1.186.451 1.725.794 1.079.687 1.916 1.701 2.394 2.897.239.598.359 1.238.359 1.888 0 .65-.12 1.29-.359 1.888z',
  },
  Klaviyo: {
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 18h-3l-3-6-3 6H6l4.5-9L6 6h3l3 6 3-6h3l-4.5 3L18 18z',
  },
}

const technologyColors: Record<string, string> = {
  WordPress: '#21759B',
  Shopify: '#7AB55C',
  Elementor: '#92003B',
  'Elementor Pro': '#92003B',
  WooCommerce: '#96588A',
  'Yoast SEO': '#A4286A',
  Klaviyo: '#FF6900',
  'Gravity Forms': '#1E73BE',
  React: '#61DAFB',
  'Next.js': '#000000',
  'Tailwind CSS': '#06B6D4',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  'Node.js': '#339933',
  MongoDB: '#47A248',
  PostgreSQL: '#336791',
  Stripe: '#635BFF',
  Mailchimp: '#FFE01B',
}

export default function TechnologyBadge({
  technology,
  variant = 'default',
  size = 'sm',
}: TechnologyBadgeProps) {
  const icon = technologyIcons[technology]
  const color = technologyColors[technology]

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  }

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  }

  const variantClasses = {
    default: 'bg-desert-50 text-desert-700 border border-desert-200',
    primary:
      'bg-white/25 backdrop-blur-md text-white border border-white/40 shadow-lg',
    overlay:
      'bg-black/30 backdrop-blur-md text-white border border-white/30 shadow-lg',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium transition-all
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      style={{
        borderColor: variant === 'default' && color ? color + '40' : undefined,
        backgroundColor:
          variant === 'default' && color ? color + '10' : undefined,
      }}
    >
      {icon && (
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox='0 0 24 24'
          fill='currentColor'
          style={{
            color: variant === 'default' && color ? color : 'currentColor',
            flexShrink: 0,
          }}
        >
          <path d={icon.path} />
        </svg>
      )}
      {technology}
    </span>
  )
}
