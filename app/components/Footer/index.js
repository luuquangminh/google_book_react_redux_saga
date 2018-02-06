import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Img from './Img';
import Banner from './books.png';
function Footer() {
  return (
    <Wrapper>
      <section>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: 'Luu Minh',
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
