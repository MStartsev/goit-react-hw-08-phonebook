import { Grid } from 'react-loader-spinner';

const Loader = () => (
  <Grid
    height="45"
    width="45"
    color="rgb(12, 46, 181)"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass=""
    visible={true}
  />
);

export default Loader;
