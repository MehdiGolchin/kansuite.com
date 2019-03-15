import * as React from 'react';
import { WrapperTop, ButtonSourceCode } from './top.styles';
import Link from 'next/link';

const HeaderTop = () => (
      <div>
        <Link href="/about">
            <WrapperTop>
                  <ButtonSourceCode>SOURCE CODE</ButtonSourceCode>
            </WrapperTop>
      </Link> 
      </div>    
);

export default HeaderTop;