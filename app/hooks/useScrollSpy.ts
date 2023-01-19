import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useScrollSpy = (name: string, hash: string) => {
  const router = useRouter();

  useEffect(() => {
    const targetElement = document.getElementById(name) as HTMLElement;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // router.replace(hash);
          window.history.pushState(null, '', hash); // this also works with dispatching event
          window.dispatchEvent(new HashChangeEvent('hashchange'));
          return;
        }
      },
      {
        root: null, // null or don't set it = viewport
        threshold: 0.5, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    observer.observe(targetElement);
  }, [name, hash, router]);
};
