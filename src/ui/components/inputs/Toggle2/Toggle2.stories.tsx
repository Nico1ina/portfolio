import type { Meta, StoryObj } from '@storybook/react'
import { CloseIcon, CheckIcon } from '@/icons/index'

import Toggle2 from './Toggle2'

const toggle: Meta<typeof Toggle2> = {
  title: 'Components/Inputs/Toggle2',
  component: Toggle2,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Toggle2 size',
      control: {
        type: 'radio',
      },
      options: ['md', 'lg'],
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    iconOn: {
      table: {
        disable: true,
      },
    },
    iconOff: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
}

export default toggle
type Story = StoryObj<typeof Toggle2>

export const Primary: Story = {
  args: {
    size: 'md',
    disabled: false,
    iconOn: <CloseIcon className='h-4 w-4' />,
    iconOff: <CheckIcon className='h-4 w-4' />,
  },
  render: (args) => (
    <div className='p-4'>
      <Toggle2 {...args} />
    </div>
  ),
}
