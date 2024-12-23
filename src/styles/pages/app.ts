import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflowX: 'hidden',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  
  variants: {
    showCartButton: {
      true: {
        justifyContent: 'space-between',
      },
      false: {
        justifyContent: 'center',
      },
    },
  },

  defaultVariants: {
    showCartButton: false,
  },
})

export const CartButton = styled('button', {
  backgroundColor: '$gray800',
  color: '#8D8D99',
  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',

  '&:hover': {
    color: '$green500'
  }
})

export const CartItemsLength = styled('span', {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  border: '3px solid $gray900',
  position: 'absolute',
  right: -7,
  top: -7,
  backgroundColor: '$green500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  lineHeight: 1.6,
  fontSize: '0.875rem',
  fontWeight: 'bold',
  padding: 10
})

export const CartDrawer = styled('div', {
  width: '480px',
  height: '100vh',
  backgroundColor: '$gray800',
  position: 'absolute',
  right: 0,
  transition: 'all 0.2s ease-in-out',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
      },
      false: {
        transform: 'translateX(110%)',
      }
    }
  },

  defaultVariants: {
    open: false,
  },

  header: {
    display: 'flex',
    justifyContent: 'end',

    button: {
      border: 0,
      background: 'transparent',
      color: '$gray300',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300'
      }
    }
  },

  h3: {
    marginTop: '1.5rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
    fontSize: '1.25rem',
    color: '$gray100',
  },

  footer: {
    marginTop: 'auto'
  }
})

export const CartDrawerItems = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const CartDrawerItem = styled('div', {
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.25rem',
})

export const CartDrawerItemImageWrapper = styled('div', {
  width: 102,
  height: 94,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  
  img: {
    objectFit: 'cover'
  },
})

export const CartDrawerItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h4: {
    lineHeight: 1.6,
    fontSize: '1.125rem',
    color: '$gray300'
  },

  p: {
    marginTop: '0.125rem',
    marginBottom: '0.5rem',
    color: '$gray100',
    fontSize: '1.125rem',
    lineHeight: 1.6,
    fontWeight: 'bold'
  },

  button: {
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$green500',
    cursor: 'pointer',
    background: 'transparent',
    width: 'fit-content'
  }
})