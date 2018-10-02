import plan, {planSelected} from './components/plan.style';
import priceList from './components/priceList.style';
import backgroundSvg from './components/backgroundSvg.style';

const palette = {
    primary: {
      main: '#31cfda',
    },
    secondary: {
      main: '#317bda',
      dark: '#225698',
    },
    tertiary: {
      main: '#5b7289',
    },
    quaternary: {
        main: '#484848',
    },
}

const styles = {
    cardContainer: {
        maxWidth: '100%',
        width: 380,
        margin: '-32px auto 0',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 16,
        '&:last-child': {
            paddingBottom: 16,
        }
      },
      fullFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      absoluteFullWidth: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      },
      contentCenter: {
        justifyContent: 'center',
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
      title: {
        marginBottom: 4,
        marginTop: 14,
        fontSize: 18,
        color: palette.tertiary.main,
      },
      titleBig: {
        color: 'white',
        fontWeight: 400,
        fontFamily: 'roboto',
        fontSize: 26,
        margin: '40px 0 24px',
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
      },
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
      quote: {
          width: 935,
          maxWidth: '100%',
          padding: '0 28px',
          boxSizing: 'border-box',

          '& > div': {
              padding: '28px 8px',
          }
      },
      quoteButton: {
        marginLeft: 170,
        float: 'left',
        marginTop: 40,
        marginBottom: 32,
      },
      quoteContent: {
        maxWidth: 494,
        margin: '0 auto',
      },
      quoteError: {
        display: 'block',
        textAlign: 'left',
        marginLeft: 170,
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
      priceList,
      plan,
      planSelected,
      backgroundSvg,
}

export { palette }
export default styles