import { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Moleculas/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    disabled: {
      type: "boolean"
    },
    className: {
      type: "string"
    }  
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Primário",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Primário Desabilitado",
    disabled: true
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Secundário",
    variant: "secondary"
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Secundário Desabilitado",
    variant: "secondary",
    disabled: true
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Terciário',
    variant: 'tertiary'
  }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Terciário Disabilitado',
    variant: 'tertiary',
    disabled: true
  }
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Violeta",
    className: "theme-violet"
  }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: "Violeta Secundário",
    className: "theme-violet",
    variant: "secondary"
  },
};


export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Violeta Terciário',
    className: 'theme-violet',
    variant: 'tertiary'
  }
}

