import plan, {planSelected} from './components/plan.style';
import priceList from './components/priceList.style';
import backgroundSvg from './components/backgroundSvg.style';
import quote from './components/quote.style';
import palette from './theme/palette.css';
import buttons from './theme/buttons.css';
import position from './theme/position.css';
import form from './theme/form.css';

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
      ...position,
      
      
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
      ...form,
      ...buttons,
      ...quote,
      priceList,
      plan,
      planSelected,
      backgroundSvg,
}

export { palette }
export default styles;