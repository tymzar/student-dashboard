import './App.css';
import './index.scss';
import {
  ColorPalette,
  WatsonHealthRotate_180 as WatsonHealthRotate180,
  // @ts-ignore
} from '@carbon/icons-react';
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Theme,
  Tile as CarbonTile,
  // @ts-ignore
} from '@carbon/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useState } from 'react';
import styled from 'styled-components';

import BottomSection from './BottomSection';
import TopSection from './TopSection';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Tile = styled(CarbonTile)`
  border-radius: 10px;
`;

function App() {
  const [reload, setReload] = useState(false);
  const [theme, setTheme] = useState('white');

  return (
    <div className="container">
      <Theme theme={theme} style={{ paddingBottom: '32px' }}>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="ADE">
            [Student Dashboard]
          </HeaderName>
          <HeaderNavigation aria-label="ADE [Student Dashboard]">
            <HeaderMenuItem href="#" onClick={() => setReload(!reload)}>
              <span
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <WatsonHealthRotate180
                  style={{ marginRight: '8px' }}
                  size={18}
                />{' '}
                Generate new data
              </span>
            </HeaderMenuItem>
            <HeaderMenuItem
              href="#"
              onClick={() => setTheme(theme !== 'white' ? 'white' : 'g100')}
            >
              <span
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ColorPalette style={{ marginRight: '8px' }} size={18} /> Toggle
                theme
              </span>
            </HeaderMenuItem>
          </HeaderNavigation>
        </Header>

        <TopSection reload={reload} />

        <BottomSection reload={reload} />
      </Theme>
    </div>
  );
}

export default App;
