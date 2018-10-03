const plan = {
    plan: {
        width: 328,
    backgroundColor: '#ffffff',
    display: 'inline-block',
    margin: '0 8px 32px',
    padding: '0',
    borderRadius: '4px',
    fontSize: 12,
    boxShadow: '0 2px 4px 0 rgba(72, 72, 72, 0.2)',

    '& p': {
        padding: '15px 24px',
        margin: 0,
        borderBottom: 'solid 1px rgba(0,0,0,0.07)',
        fontWeight: 100,
        color: '#484848',

        '& b': {
            fontWeight: 400,
        },
    },

    '& h2': {
        fontSize: 18,
        margin: '20px 0',
        textTransform: 'capitalize',
        color: '#484848',
    },

    '& h3': {
      position: 'relative',
      fontSize: 38,
      margin: '0',
      padding: '24px 0 24px 0',
      borderBottom: 'solid 1px rgba(0,0,0,0.07)',
      borderTop: 'solid 1px rgba(0,0,0,0.07)',
      textTransform: 'capitalize',
      color: '#31cfda',
      lineHeight: '22px',
      backgroundColor: 'rgba(49, 207, 218, 0.05)',

      '& span': {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 300,
        lineHeight: 0,
      },

      '& sup': {
          fontSize: 16,
          fontWeight: 300,
          marginLeft: 8,
      }
    },

    '& button': {
        margin: 10,
        width: 'calc(100% - 20px)',
        color: 'white',
        height: 50,
        fontSize: 16,
        letterSpacing: '.05em',
        fontWeight: 400,

        '& svg': {
            paddingRight: 8,
            marginTop: -2,
        }
    },
  },
  planSelected: {
    backgroundColor: '#31cfda',

    '& p': {
        color: 'white',
    },

    '& button': {
        backgroundColor: 'white',
        color: '#31cfda',

        '&:hover': {
            backgroundColor: 'white',
            color: '#31cfda',
        },
    },

    '& h3': {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },

    '& h2': {
        color: 'white',
    },
  }
};

export default plan;