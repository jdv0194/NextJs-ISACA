import Link from 'next/link';
import { useI18n } from 'next-localization';

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
const StaticNavigation = () => {
  const { t } = useI18n();

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link href="/">
          <a className="text-dark">
            <img
              src="https://www.isaca.org/-/media/images/isacadp/project/isaca/logos/isaca-logo-web.png"
              alt="ISACA Logo"
              style={{ maxWidth: 120 }}
            />
          </a>
        </Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="/styleguide">
          <a className="p-2 text-dark">{t('Styleguide')}</a>
        </Link>
        <Link href="/graphql">
          <a className="p-2 text-dark">{t('GraphQL')}</a>
        </Link>
        <Link href="/myisaca/membership-status">
          <a className="p-2 text-dark">MyISACA</a>
        </Link>
        <Link href="/testing">
          <a className="p-2 text-dark">Testing</a>
        </Link>
      </nav>
    </div>
  );
};

export default function StaticLayout() {
  return (
    <>
      <StaticNavigation />
    </>
  );
}

