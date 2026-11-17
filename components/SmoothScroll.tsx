'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({ lerp: 0.09, anchors: false });
    // @ts-ignore
    window.lenis = lenis;

    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const adjacent = (a: string, b: string) => {
        const order = Array.from(document.querySelectorAll<HTMLElement>('[data-8b-section]'))
          .filter(section => section.getAttribute('data-8b-section') !== 'navigation')
          .map(section => section.id);
        return order.indexOf(a) >= 0 && order[order.indexOf(a) + 1] === b;
      };

      const layoutBox = (element: HTMLElement) => {
        let x = 0, y = 0, node: HTMLElement | null = element;
        while (node) { x += node.offsetLeft; y += node.offsetTop; node = node.offsetParent as HTMLElement; }
        return { x, y, w: element.offsetWidth, h: element.offsetHeight, cx: x + element.offsetWidth / 2, cy: y + element.offsetHeight / 2 };
      };

      // Scene: work (horizontal track scroll)
      const work = document.getElementById('work');
      if (work) {
        const stage = work.querySelector<HTMLElement>('.work__stage');
        const frame = work.querySelector<HTMLElement>('.work__frame');
        const track = work.querySelector<HTMLElement>('.work__track');
        const cases = Array.from(work.querySelectorAll<HTMLElement>('.case'));

        if (stage && frame && track && cases.length) {
          work.classList.add('is-track');
          let distance = 0;
          const setRun = () => {
            distance = track.scrollWidth - frame.offsetWidth;
            work.style.setProperty('--run', `${distance}px`);
          };
          setRun();
          ScrollTrigger.addEventListener('refreshInit', setRun);

          const run = () => distance;
          gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              id: 'work',
              trigger: work,
              start: 'top top',
              end: () => `+=${run()}`,
              pin: stage,
              pinSpacing: true,
              scrub: true,
              invalidateOnRefresh: true,
            }
          }).fromTo(track, { x: 0 }, { x: () => -run() });

          const radius = () => (window.innerWidth < 700 ? window.innerWidth * 2.1 : window.innerWidth * 0.95);
          const bend = (card: HTMLElement) => {
            const offset = layoutBox(frame).x + card.offsetLeft + card.offsetWidth / 2 - run() - window.innerWidth / 2;
            const angle = offset / radius();
            return { x: radius() * Math.sin(angle) - offset, y: radius() * (1 - Math.cos(angle)), rotation: angle * 180 / Math.PI };
          };

          const exit = gsap.timeline({
            defaults: { ease: 'power1.in' },
            scrollTrigger: { id: 'work:exit', trigger: work, start: 'bottom bottom', end: 'bottom 30%', scrub: true, invalidateOnRefresh: true }
          });
          exit.to(frame, { x: () => -window.innerWidth * 0.2, duration: 1 }, 0);
          cases.forEach(card => exit.to(card, { x: () => bend(card).x, y: () => bend(card).y, rotation: () => bend(card).rotation, duration: 1 }, 0));
        }
      }

      // Scene: again (rotating wheel)
      const again = document.getElementById('again');
      let measureAgain: (() => void) | null = null;
      if (again) {
        const stage = again.querySelector<HTMLElement>('.again__stage');
        const head = again.querySelector<HTMLElement>('.again__head');
        const swing = again.querySelector<HTMLElement>('.again__swing');
        const wheel = again.querySelector<HTMLElement>('.again__wheel');
        const cards = Array.from(again.querySelectorAll<HTMLElement>('.partner'));

        if (stage && head && swing && wheel && cards.length) {
          again.classList.add('is-wheel');
          cards.forEach((card, index) => card.style.setProperty('--i', String(index)));

          let step = 0, arcTop = 0, radius = 1;
          measureAgain = () => {
            const width = window.innerWidth, height = stage.offsetHeight;
            const headBottom = head.offsetTop + head.offsetHeight;
            const room = height - headBottom - window.innerHeight * 0.04;
            const card = Math.max(180, Math.min(width * (width < 700 ? 0.7 : 0.28), (room - 32) / 1.25));
            arcTop = headBottom + Math.max(28, (room - card * 1.25) * 0.4);
            radius = Math.max(width * 0.95, card * 3.3);
            step = 2 * Math.asin((card + Math.max(18, width * 0.024)) / (2 * radius)) * 180 / Math.PI;
            again.style.setProperty('--card', `${card.toFixed(1)}px`);
            again.style.setProperty('--radius', `${radius.toFixed(1)}px`);
            again.style.setProperty('--step', `${step.toFixed(3)}deg`);
            again.style.setProperty('--arc-top', `${arcTop.toFixed(1)}px`);
            again.style.setProperty('--spin', `${Math.round(cards.length * window.innerHeight * 0.42)}px`);
          };
          measureAgain();
          ScrollTrigger.addEventListener('refreshInit', measureAgain);

          gsap.fromTo(wheel, 
            { rotation: () => step * 0.55 }, 
            { 
              rotation: () => -(cards.length - 0.45) * step, 
              ease: 'none', 
              scrollTrigger: { id: 'again', trigger: again, start: 'top 30%', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true } 
            }
          );

          if (adjacent('work', 'again')) {
            gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { id: 'again:entry', trigger: again, start: 'top bottom', end: 'top 30%', scrub: true, invalidateOnRefresh: true } })
              .fromTo(swing, { rotation: () => Math.max(4, Math.asin(Math.min(1, window.innerWidth * 0.3 / radius)) * 180 / Math.PI - step * 0.55) }, { rotation: 0, ease: 'power1.out' }, 0)
              .fromTo(swing, { y: () => -(arcTop - 40) }, { y: 0, ease: 'power2.in' }, 0)
              .fromTo(head, { yPercent: 45 }, { yPercent: 0, ease: 'power2.out' }, 0);
          }
        }
      }

      // Scene: capabilities (stacking deck)
      const capabilities = document.getElementById('capabilities');
      if (capabilities) {
        const cards = Array.from(capabilities.querySelectorAll<HTMLElement>('.service'));
        capabilities.classList.add('is-deck');
        cards.forEach((card, index) => card.style.setProperty('--i', String(index)));
        cards.forEach((card, index) => {
          const next = cards[index + 1];
          if (!next) return;
          gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              id: `capabilities:${index}`,
              trigger: next,
              start: 'top bottom',
              end: () => `top ${parseFloat(getComputedStyle(next).top) || 0}px`,
              scrub: true,
              invalidateOnRefresh: true,
            }
          })
            .to(card, { scale: 0.9 }, 0)
            .to(card.querySelector('.service__shade'), { opacity: 0.55 }, 0);
        });
      }

      // Scene: method (cycle animation)
      const method = document.getElementById('method');
      if (method) {
        const steps = Array.from(method.querySelectorAll<HTMLElement>('.step'));
        const stations = Array.from(method.querySelectorAll<HTMLElement>('.method__station'));
        const stepsContainer = method.querySelector<HTMLElement>('.method__steps');
        const arc = method.querySelector('.method__arc');
        const arm = method.querySelector('.method__arm');

        if (stepsContainer && arc && arm && steps.length) {
          method.classList.add('is-cycle');
          const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { id: 'method', trigger: stepsContainer, start: 'top 62%', end: 'bottom 62%', scrub: true }
          });
          timeline
            .fromTo(arc, { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: 1 }, 0)
            .fromTo(arm, { rotation: 0 }, { rotation: 360, duration: 1 }, 0);

          steps.forEach((step, index) => {
            const at = index / steps.length;
            timeline.fromTo(step, { opacity: 0.2 }, { opacity: 1, duration: 0.07 }, Math.max(0, at - 0.03));
            if (stations[index]) {
              timeline
                .fromTo(stations[index], { scale: 0.4 }, { scale: 1.35, duration: 0.05, ease: 'back.out(3)' }, at)
                .to(stations[index], { scale: 1, duration: 0.08 }, at + 0.06);
            }
          });
        }
      }

      ScrollTrigger.refresh();

      // Ensure layout stabilizes after fonts and images render
      if (typeof document !== 'undefined') {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            if (measureAgain) measureAgain();
            ScrollTrigger.refresh();
          });
        }
      }
      const t1 = setTimeout(() => {
        if (measureAgain) measureAgain();
        ScrollTrigger.refresh();
      }, 350);
      const t2 = setTimeout(() => {
        if (measureAgain) measureAgain();
        ScrollTrigger.refresh();
      }, 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        if (measureAgain) {
          ScrollTrigger.removeEventListener('refreshInit', measureAgain);
        }
      };
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      // @ts-ignore
      window.lenis = null;
    };
  }, []);

  return null;
}
