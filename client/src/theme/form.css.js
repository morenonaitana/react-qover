import palette from './palette.css';

const form = {
      formControl: {
        flex: '1',
        marginTop: 16,
        marginBottom: 4,
        '& div:before': {
            borderBottom: `2px solid ${palette.secondary.main}`,
        },
        '& div:after': {
            borderBottom: `2px solid ${palette.primary.main}`,
        },
        '& div:focus': {
            display: 'none',
        },
        '& label': {
            fontSize: 14,
            color: palette.tertiary.main,
        }
      },
      toggle: {
          textTransform: 'uppercase',
          margin: '0 0 32px',
          fontWeight: 100,
        '& p': {
            fontSize: 13,
            display: 'inline-block',
            pointerEvents: 'none',
            color: 'white',
            letterSpacing: '.1em',
        },
        '& label': {
            margin: '0 4px',
        }
      },
      toggleSelected: {
        fontWeight: 500,
      },
      iOSSwitchBase: {
        '&$iOSChecked': {
          color: 'white',
          '& + $iOSBar': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
      iOSChecked: {
        transform: 'translateX(15px)',
        '& + $iOSBar': {
          opacity: 1,
          border: 'none',
        },
      },
      iOSBar: {
        borderRadius: 50,
        width: 50,
        height: 30,
        marginTop: -15,
        marginLeft: -25,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        opacity: 1,
      },
      iOSIcon: {
        width: 22,
        height: 22,
        boxShadow: 'none',
      },
      checkbox: {
        color: palette.tertiary.main,
        marginTop: 4,
        '& svg': {
            color: palette.secondary.main,
        },
        '& span': {
            color: palette.tertiary.main,
            fontSize: 12,
            paddingRight: 2,
            display: 'inline',
        },
      },
      textFieldBorder: {
        margin: '10px 0',
        height: 40,
      },
      inputLabel: {
        width: 170,
        textAlign: 'left',
        color: palette.quaternary.main,
        fontWeight: 300,
        fontSize: '15px',
      },
      inputNumber: {
        width: 80,
        paddingRight: 10,
      },
      select: {
          flex: '1',
          textAlign: 'left',
          '& svg': {
              color: palette.primary.main,
              marginRight: 6,
          }
      },
      alert: {
          color: 'red',
      },
      error: {
          color: 'red',
          height: 25,
      },
}

export default form;