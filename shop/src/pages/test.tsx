import { useTranslation } from 'next-i18next';
import ContactForm from '@/components/settings/contact-form';
import { Image } from '@/components/ui/image';
import contactIllustration from '@/assets/contact-illustration.svg';
import { getLayout } from '@/components/layouts/layout';
import { formatAddress } from '@/lib/format-address';
import { getIcon } from '@/lib/get-icon';
import isEmpty from 'lodash/isEmpty';
import * as socialIcons from '@/components/icons/social';
import Seo from '@/components/seo/seo';
import { useSettings } from '@/framework/settings';
export { getStaticProps } from '@/framework/general.ssr';

export const TestPage = () => {
  const { t } = useTranslation('common');
  const { settings } = useSettings();
  return (
    <>
      <Seo title={'Blog'} url={'blog'} />



      <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-8 text-center">
          <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
            {t('common:nav-menu-blog')}
          </h1>
        </header>






        <div className="order-1 mb-8 w-full bg-light p-5 md:order-2 md:mb-0 md:p-8 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-9 rtl:lg:mr-9">

          <div className="flex flex-col border-b mt-9 lg:flex-row lg:space-x-10 xl:space-x-16 rtl:lg:space-x-reverse pb-14 border-border-200 border-opacity-70">

            <div className="flex flex-col items-start mt-8 lg:w-1/4 lg:px-0 lg:mt-0">
              <h3 className="mb-7 font-body text-xl  text-heading md:text-2xl">Justine Barone</h3>


              <p>

                Justine dreams of a world where retailers, brands, and customers can all be bonded together in a mutually beneficial way. A world where brands have their retailer’s best interests at heart. She is passionate about tearing down the current barriers that exist for outdoor retailers and helping the Gearo community thrive one transaction at a time.
              </p>
            </div>

            <div className="flex flex-col items-start mt-8 lg:w-3/4 lg:px-0 lg:mt-0">
              <h2 className="mb-7 font-body text-xl font-bold text-heading md:text-2xl">VISION ALCHEMIST</h2>

              <Image
                src={contactIllustration}
                alt={t('nav-menu-contact')}
                className="h-auto w-full"
              />

              <h3 className="mb-7 font-body text-xl  text-heading md:text-2xl">Justine Barone</h3>


              <p>

                Justine dreams of a world where retailers, brands, and customers can all be bonded together in a mutually beneficial way. A world where brands have their retailer’s best interests at heart. She is passionate about tearing down the current barriers that exist for outdoor retailers and helping the Gearo community thrive one transaction at a time.
              </p>


            </div>

          </div>
        </div>



      </section>

    </>
  );
};
TestPage.getLayout = getLayout;
export default TestPage;
