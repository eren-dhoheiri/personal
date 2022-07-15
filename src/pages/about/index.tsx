import { Layout } from '../../components/layout';
import { NextSeo } from 'next-seo'
import Image from 'next/image';;
import {
  AboutMeContent,
  AboutMeSiteDescription,
  AboutMeSiteTitle,
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
  RecommendedPodcastEpisodes,
  VideosWorthWatching,
} from '../../_data/about';
import { Navigation } from '../../components/navigation';
import { Container } from '../../components/container';
import React from 'react';
import { Title } from '../../components/title';
import { ExternalLink } from '../../components/external-link';
import { Section } from '../../components/section';
import { Quote } from '../../components/quote';

import Avatar from '../../../public/assets/blog/authors/eren.jpeg';

const AboutMe = () => {
  return (
    <Layout>
      <NextSeo
        title={AboutMeSiteTitle}
        description={AboutMeSiteDescription}
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_URL,
          title: AboutMeSiteTitle,
          description: AboutMeSiteDescription,
          images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${AboutMeSiteTitle}` }],
          site_name: AboutMeSiteTitle,
        }}
      />
      <Navigation />
      <Container>
        <header>
          <Title>Tentang Saya</Title>
          <div className="flex flex-col-reverse sm:flex-row justify-between gap-x-12">
            <p className="mt-4 prose">{AboutMeContent}</p>
            <div className="flex-shrink-0 overflow-hidden">
                <Image src={Avatar} width="150" height="150" alt="avatar" className="rounded-full" />
            </div>
          </div>
        </header>
        <Section title={'Pekerjaan'}>
          <p className="prose">
            Sudah 2 tahun lebih menjadi profesional pengembang piranti lunak. Sebelumnya, belajar programming secara otodidak sehabis lulus kuliah di Universitas Muhammadiyah Yogyakarta (UMY) dengan studi Manajamen Bisnis. Dimulai dengan belajar HTML, CSS, dan Javascript, setelahnya baru mulai mengenal data struktur dan algoritma serta bagaimana kode dapat berjalan dengan efisien.
            <br />
            <br />Memulai karir sebagai junior software engineer di{' '}
            <ExternalLink href={'https://www.celerates.com/'}> Celerates</ExternalLink>.
            Pernah terlibat beberapa project di {' '} 
            <ExternalLink href={'https://www.kompasgramedia.com/'}> Kompas Gramedia</ExternalLink>,
            seperti {' '} 
            <ExternalLink href={'https://mykg.id'}> MyKG</ExternalLink>,{' '} 
            <ExternalLink href={'https://bentarabudaya.com/'}> Bentara Budaya</ExternalLink>,{' '} 
            <ExternalLink href={'https://purnakaryakg.id/'}> Purna Karyawan Kompas</ExternalLink>.
            Kemudian bekerja sebagai Full Stack Engineer  di{' '}
            <ExternalLink href={'https://bizzy.co.id/'}> Bizzy Digital</ExternalLink>, dan membangun 
            <ExternalLink href={'https://distribution.bizzy.co.id/'}> Bizzy Connect</ExternalLink>.{' '}
            Saat ini bekerja bekerja sebagai Frontend Engineer di
            <ExternalLink href={'https://efishery.com/'}> eFishery</ExternalLink>, 
            start-up aquaculture terbesar di Indonesia, membangun{' '}
            <ExternalLink href={'https://efarm.efishery.com/'}> eFarm</ExternalLink> untuk kesejahteraan pembudidaya udang. 
            <br />
            <br />
            Senang kalau bisa bekerja sama, sila hubungi saya via {' '}
            <ExternalLink href="mailto:dhoheiri@gmail.com">Email</ExternalLink> atau 
            <ExternalLink href="https://www.linkedin.com/in/erendhoheiri/"> LinkedIn</ExternalLink>.
          </p>
        </Section>
        {/* <Section title={'Books'}>
          <div className="prose">
            Books I think are must-read or I simply enjoyed a lot
            <ul className="mt-1">
              {Books.map((book) => (
                <li key={book.name}>
                  <ExternalLink href={book.link}>{book.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Videos'}>
          <div className="prose">
            Random videos I think are worth watching
            <ul className="mt-1">
              {VideosWorthWatching.map((video) => (
                <li key={video.name}>
                  <ExternalLink href={video.link}>{video.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Podcasts'}>
          <div className="prose">
            Podcasts I think are worth listening to
            <ul className="mt-1">
              {Podcasts.map((podcast) => (
                <li key={podcast.name}>
                  <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                </li>
              ))}
            </ul>
            <p className="mt-4">Episodes I'd recommend the most</p>
            <ul className="mt-1">
              {RecommendedPodcastEpisodes.map((episode) => (
                <li key={episode.name}>
                  <ExternalLink href={episode.link}>{episode.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'Blogs'}>
          <div className="prose">
            Blogs I read
            <ul className="mt-1">
              {Blogs.map((blog) => (
                <li key={blog.name}>
                  <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Section> */}
        {/* <Section title={'People'}>
          <div className="prose">
            People I think are worth following on Twitter:{' '}
            {PeopleWorthFollowingOnTwitter.map<React.ReactNode>((personOnTwitter) => (
              <ExternalLink key={personOnTwitter.name} href={personOnTwitter.link}>
                {personOnTwitter.name}
              </ExternalLink>
            )).reduce((prev, curr) => [prev, ', ', curr])}
            .
          </div>
        </Section> */}
        {/* <Section title={'Quotes'}>
          <div className="">
            Random quotes I found inspirational and meaningful
            <div className="mt-4 space-y-8">
              {Quotes.map((quote, index) => (
                <Quote key={index} quote={quote.content} author={quote.author} />
              ))}
            </div>
          </div>
        </Section> */}
      </Container>
    </Layout>
  );
};

export default AboutMe;
