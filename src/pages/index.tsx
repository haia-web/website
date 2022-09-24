import type { NextPage } from 'next';

import { Main } from '@components/Main';
import { Hero } from '@components/Main/Sections/Hero';
import { Form } from '@components/Main/Sections/Form';
import { Infos } from '@components/Main/Sections/Infos';
import { About } from '@components/Main/Sections/About';
import { About2 } from '@components/Main/Sections/About2';
import { Locale } from '@components/Main/Sections/Locale';
import { LeisureFull } from '@components/Main/Sections/Leisure/LeisureFull';
import { LeisureAbout } from '@components/Main/Sections/Leisure/About';
import { LeisureAbout2 } from '@components/Main/Sections/Leisure/About2';
import { Gallery } from '@components/Main/Sections/Gallery';
import { Plans } from '@components/Main/Sections/Plans';
import { VirtualTour } from '@components/Main/Sections/VirtualTour';
import { Architects } from '@components/Main/Sections/Architects';

const Home: NextPage = () => {
  return (
    <Main>
      <Hero />
      <section className="form-infos">
        <Form />
        <Infos />
      </section>
      <About />
      <About2 />
      <Locale />
      <section className="leisure">
        <LeisureFull />
        <section
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <LeisureAbout />
          <LeisureAbout2 />
        </section>
      </section>
      <Gallery />
      <Plans />
      <VirtualTour />
      <Architects />
    </Main>
  );
};

export default Home;
