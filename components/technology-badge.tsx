interface TechnologyBadgeProps {
  technology: string
  variant?: 'default' | 'primary' | 'overlay'
  size?: 'sm' | 'md' | 'lg'
}

const technologyColors: Record<string, string> = {
  'WordPress': '#21759B',
  'Shopify': '#7AB55C',
  'Elementor': '#92003B',
  'Elementor Pro': '#92003B',
  'WooCommerce': '#96588A',
  'Yoast SEO': '#A4286A',
  'Klaviyo': '#FF6900',
  'Gravity Forms': '#1E73BE',
}

export default function TechnologyBadge({
  technology,
  variant = 'default',
  size = 'sm'
}: TechnologyBadgeProps) {
  const color = technologyColors[technology]

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  }

  const variantClasses = {
    default: 'bg-desert-50 text-desert-700 border border-desert-200',
    primary: 'bg-white/20 backdrop-blur-sm text-white border border-white/30',
    overlay: 'bg-black/20 backdrop-blur-sm text-white border border-white/20'
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
        backgroundColor: variant === 'default' && color ? color + '10' : undefined
      }}
    >
      {technology}
    </span>
  )
}
