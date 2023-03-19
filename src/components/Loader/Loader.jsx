import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => (
 <MagnifyingGlass
  visible={true}
  height="270"
  width="270"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{position: 'fixed',
      top: '50%',
      left: '50%',
      }}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
);

