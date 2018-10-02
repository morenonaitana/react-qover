import palette from './palette.css';

const buttons = {
    button: {
        flex: '1',
        marginTop: '0',
        boxShadow: 'none',
        textTransform: 'none',
        height: 45,
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonPrimary: {
      flex: '1',
      marginTop: '0',
      boxShadow: 'none',
      textTransform: 'none',
      height: 50,
      fontSize: 16,
      padding: '0 40px',
      fontWeight: 'bold',
      color: 'white',
    },
    buttonBorder: {
        marginTop: 24,
        flex: '1',
        color: '#ffffff',
        boxShadow: 'none',
        border: '1px solid #ffffff',
        backgroundColor: 'transparent',
        textTransform: 'none',
        height: 45,
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,.3)',
        }
    },
    link: {
        color: palette.secondary.main,
        fontSize: 12,
        textDecoration: 'none',
        '&:hover': {
            color: palette.secondary.dark,
        }
      },
    linkPrimary: {
        color: palette.primary.main,
        fontSize: 14,
        fontWeight: 500,
        paddingBottom: 40,
        textDecoration: 'none',

        '& span': {
            textDecoration: 'underline',
        },
        '& svg': {
            fill: palette.primary.main,
            margin: '4px 0 -3px 8px',
        },
      },
}

export default buttons;