import { useRef, useEffect } from 'react';

// Animation
import { useSpring, animated } from 'react-spring';

// Assets
import logo from '/images/delsuites-logo.svg';

const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;

    const delay = setTimeout(() => {
      intro.remove();
    }, 3500);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const animationContainer = useSpring({
    to: { transform: 'translateY(-100%)' },
    from: {
      transform: 'translateY(0%)',
    },
    config: { duration: 800 },
    delay: 2000,
  });

  const animationLogo = useSpring({
    to: { opacity: 1 },
    from: {
      opacity: 0,
    },
    config: { duration: 1000 },
    delay: 1000,
  });

  return (
    <animated.div
      ref={introRef}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: '#1d2c38',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...animationContainer,
      }}
    >
      <animated.div style={animationLogo}>
        <img src={logo} alt='delsuites logo' style={{ width: 300 }} />
      </animated.div>
    </animated.div>
  );
};

export default Intro;
