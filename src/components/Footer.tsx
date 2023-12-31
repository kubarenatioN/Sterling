import { GET_FOOTER } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { Icons } from '@/lib/icons';
import { FooterQuery } from '@/models';
import Image from 'next/image';

const SocialIcon = ({ link, id }: { link: string; id: string }) => {
  return (
    <a
      href={link}
      target='_blank'
      aria-label={`External link to the official ${id} of the company`}
      className='w-8 h-8 p-1 flex text-neutral-800 bg-zinc-100 rounded-full'>
      {getIcon(id)}
    </a>
  );
};

const getIcon = (id: string) => {
  switch (id) {
    case 'facebook': {
      return <Icons.facebook />;
    }
    case 'twitter': {
      return <Icons.twitter />;
    }
  }
};

const Footer = async () => {
  const { data } = await getClient().query<FooterQuery>({
    query: GET_FOOTER,
  });

  const {
    contacts: { nodes },
    socials: { nodes: socialNodes },
  } = data;

  const mapIframe = nodes.find((node) => node.contacts.map != null)?.contacts
    .map;

  return (
    <>
      <div className='bg-tertriary mt-[100px] pt-16 pb-10'>
        <div className='container flex flex-col-reverse md:flex-row justify-center items-center lg:gap-10 gap-4 text-zinc-100'>
          {mapIframe && (
            <div
              className='w-full md:w-auto [&>iframe]:w-full [&>iframe]:lg:w-[500px] [&>iframe]:md:w-[360px]'
              dangerouslySetInnerHTML={{ __html: mapIframe }}></div>
          )}
          <div className='basis-[50%] flex flex-col gap-4'>
            <h3 className='text-3xl'>Our Contacts</h3>

            <div className='flex flex-wrap lg:gap-4 gap-x-4 gap-y-6'>
              {nodes.map((node, i) => {
                const { contacts } = node;

                return (
                  <div
                    className='flex flex-col gap-4 lg:w-[calc(50%-1rem)] sm:w-[calc(50%-1rem)] w-full'
                    key={i}>
                    <div className='flex flex-col'>
                      <span className='text-zinc-300 text-sm italic'>
                        Address
                      </span>
                      <a href={contacts.mapUrl} target='_blank'>
                        {contacts.address}
                      </a>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-zinc-300 text-sm italic'>
                        Contacts
                      </span>
                      <div className='flex flex-col gap-2'>
                        {contacts.phones.split(',').map((phone) => {
                          return (
                            <p key={phone}>
                              <a href={`tel:${phone}`}>{phone}</a>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-zinc-300 text-sm italic'>
                        Working hours
                      </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: contacts.workingHours,
                        }}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='flex gap-3'>
              {socialNodes.map((node, i) => {
                const { id, link } = node.socialLink;
                return <SocialIcon id={id} link={link} key={id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-neutral-900'>
        <div className='container py-6 flex justify-center'>
          <a href='/'>
            <Image
              src='/logo-light.svg'
              alt='Logo'
              width={80}
              height={80}
              style={{
                width: 80,
                height: 80,
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
