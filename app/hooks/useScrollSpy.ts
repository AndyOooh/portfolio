import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// type ScrollSpyProps = {
//   name: string;
//   hash: string;
// };

export const useScrollSpy = (name: string, hash: string) => {
  console.log('🚀  file: useScrollSpy.ts:11  hash', hash);
  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const target = document.getElementById(name) as HTMLElement;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.history.pushState(null, '', hash); // this also works with dispatching event
          // router.push(hash)
          // window.dispatchEvent(new HashChangeEvent('hashchange'));
          // router.replace(hash);
          // navigate(hash);
          return;
        }
      },
      {
        root: null, // null or don't set it = viewport
        threshold: 0.5, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    observer.observe(target);
  }, [name, hash, router]);
};
