import { useEffect, useState } from "react";

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={ show ? 'modalFadeIn' : 'modalFadeOut' }
        onAnimationEnd={onAnimationEnd}
        style={{ position: 'absolute' }}
      >
        {children}
      </div>
    )
  );
};

export default Fade;

// https://czaplinski.io/blog/super-easy-animation-with-react-hooks/