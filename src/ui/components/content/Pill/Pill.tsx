import type { ReactElement, ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  variant?: 'primary' | 'surface'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  size?: 'md' | 'sm'
}

interface IPillFamilyClasses {
  variant: Record<string, string>
  iconPosition: Record<string, string>
  size: Record<string, string>
}

const pillFamilyClasses: IPillFamilyClasses = {
  variant: {
    primary: 'bg-primary text-surface-white before:border-primary',
    surface: 'bg-surface-100 text-surface-900 before:border-surface-300',
  },
  iconPosition: {
    left: '[&>*:first-child]:order-first',
    right: '[&>*:first-child]:order-last',
  },
  size: {
    sm: 'text-xs font-bold py-xs',
    md: 'text-md font-bold py-xm',
  },
}

const Pill = ({
  children,
  variant = 'surface',
  icon,
  iconPosition = 'left',
  size = 'md',
}: PillProps) => {
  return (
    <span
      className={`before:border-1 relative inline-flex whitespace-nowrap rounded-full p-sm text-xs font-bold outline-none transition-colors before:absolute before:top-[0px] before:right-[0px] before:bottom-[0px] before:left-[0px] before:rounded-full before:border ${pillFamilyClasses['variant'][variant]}${pillFamilyClasses['size'][size]}`}
    >
      <div
        className={`inline-flex items-center justify-center pr-1 [&>*+span]:ml-1 ${pillFamilyClasses['iconPosition'][iconPosition]}`}
      >
        <span>{icon}</span>
        <span className='pr-1'>{children}</span>
      </div>
    </span>
  )
}

export default Pill
