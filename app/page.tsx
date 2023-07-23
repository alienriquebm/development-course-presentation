import dynamic from 'next/dynamic';
import { Class1, Class2 } from './Components/CourseClasses';

export default function Home() {
  const Presentation = dynamic(() => import('./Components/Presentation'), {
    ssr: false,
  });
  return (
    <Presentation>
      <Class1 />
      <Class2 />
    </Presentation>
  );
}
