import PuffLoader from 'react-spinners/PuffLoader';

const Spinner = () => {
  return (
    <div>
      <PuffLoader
        color='#8a7955'
        size={150}
        css={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default Spinner;
