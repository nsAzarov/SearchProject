import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'

const defaultProps = {
  src:
    'https://upload.wikimedia.org/wikipedia/ru/thumb/1/1f/Герб_РЭУ_им_Плеханова.png/320px-Герб_РЭУ_им_Плеханова.png',
  alt: 'РЭУ Плеханова'
}

export default {
  title: 'Logo',
  component: Logo,
  args: defaultProps
} as Meta

export const Default: Story = (args) => <Logo {...defaultProps} {...args} />
