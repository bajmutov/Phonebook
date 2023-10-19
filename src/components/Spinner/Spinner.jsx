import { InfinitySpin } from 'react-loader-spinner';

const Spinner = ({ size }) => {
  return (
    <div>
      <InfinitySpin width={size} color="#4fa94d" />
    </div>
  );
};

export default Spinner;
