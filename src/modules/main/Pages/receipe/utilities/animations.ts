import confetti from 'canvas-confetti';
import { useSpring } from 'react-spring';

export const launchConfetti = () => {
  confetti({
    particleCount: 500,
    spread: 200,
    origin: { y: 0.5 },
  });
};

export const useSlideInAnimation = (show:boolean) =>
  useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 180, friction: 18 },
  });
