// Theme imports
import palette from './theme/palette.css';
import buttons from './theme/buttons.css';
import position from './theme/position.css';
import form from './theme/form.css';
import typography from './theme/typography.css';
import wrapper from './theme/wrapper.css';

// Components imports
import plan from './components/plan.style';
import priceList from './components/priceList.style';
import backgroundSvg from './components/backgroundSvg.style';
import quote from './components/quote.style';

const styles = {
      
      // Main theme
      ...position,
      ...form,
      ...buttons,
      ...typography,
      ...wrapper,
      
      // Components
      ...quote,
      ...plan,
      ...priceList,
      ...backgroundSvg,
}

export { palette }
export default styles;