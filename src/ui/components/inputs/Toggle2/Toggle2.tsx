import { ReactElement, useState, useEffect } from 'react'

interface Toggle2Props {
  size: 'md' | 'lg'
  disabled?: boolean
  iconOn?: ReactElement
  iconOff?: ReactElement
  onChange: (checked: boolean) => void
}

interface IToggle2FamilyClasses {
  size: Record<string, string>
}

const toggle2FamilyClasses: IToggle2FamilyClasses = {
  size: {
    md: 'w-[42px] h-[22px]',
    lg: 'w-[50px] h-[26px]',
  },
}

const Toggle2 = ({
  size = 'md',
  disabled,
  iconOn,
  iconOff,
  onChange,
}: Toggle2Props) => {
  const [toggled, setToggled] = useState(false)
  useEffect(() => {
    if (disabled) {
      setToggled(false)
    }
  }, [disabled])
  return (
    <button
      role='switch'
      tabIndex={0}
      onClick={() => {
        setToggled(!toggled)
        onChange(!toggled)
      }}
      className={`${
        toggle2FamilyClasses['size'][size]
      } inline-flex items-center bg-primary rounded-full relative
 ${disabled ? 'cursor-not-allowed bg-surface-100' : ''}
 ${
   toggled
     ? 'bg-primary hover:bg-primary-600'
     : 'bg-surface-200 hover:bg-surface-250'
 }
 transition-colors ease-in-out duration-400`}
      disabled={disabled}
      aria-checked={toggled}
    >
      <div
        className={`bg-white rounded-full h-4 w-4 ml-0.5 fixed transition-transform duration-200 ease-in-out
   ${toggled ? 'text-primary transform translate-x-5' : 'text-surface-300'}
   ${disabled ? 'text-surface-100' : ''}
   `}
      >
        {toggled ? iconOff : iconOn}
      </div>
    </button>
  )
}

export default Toggle2
