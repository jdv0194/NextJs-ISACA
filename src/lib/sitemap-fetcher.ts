
import { GraphQLSitemapService, StaticPath } from '@sitecore-jss/sitecore-jss-nextjs';
import { DisconnectedSitemapService, ManifestInstance } from '@sitecore-jss/sitecore-jss-nextjs';
import { GetStaticPathsContext } from 'next';
import config from 'temp/config';
import pkg from '../../package.json';

export class SitecoreSitemapFetcher {
  private _graphqlSitemapService: GraphQLSitemapService;
  private _disconnectedSitemapService: DisconnectedSitemapService;

  constructor() {
    this._graphqlSitemapService = new GraphQLSitemapService({
      endpoint: config.graphQLEndpoint,
      apiKey: config.sitecoreApiKey,
      siteName: config.jssAppName,
      /*
      The Sitemap Service needs a root item ID in order to fetch the list of pages for the current
      app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
      otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
      rootItemId: '{GUID}'
      */
    });
    this._disconnectedSitemapService = new DisconnectedSitemapService(
      (this.getManifest() as unknown) as ManifestInstance
    );
  }

  /**
   * Get sitecore-import.json manifest
   */
  private getManifest() {
    if (process.env.JSS_MODE !== 'disconnected') return null;

    try {
      const manifest = require('sitecore/manifest/sitecore-import.json');

      return manifest;
    } catch (error) {
      throw Error(
        "[Disconnected Export] Please make sure you've started the disconnected proxy `npm run start:disconnected-proxy`"
      );
    }
  }
  /**
   * Generates SitecoreSitemap for given mode (Export / Disconnected Export / SSG)
   * @param {GetStaticPathsContext} context
   */
  async fetch(context?: GetStaticPathsContext): Promise<StaticPath[]> {
    // If we are in Export mode
    if (process.env.EXPORT_MODE) {
      // Disconnected Export mode
      if (process.env.JSS_MODE === 'disconnected') {
        return this._disconnectedSitemapService.fetchExportSitemap();
      }
      return this._graphqlSitemapService.fetchExportSitemap(pkg.config.language);
    }

    return this._graphqlSitemapService.fetchSSGSitemap(context?.locales || []);
  }
}

export const sitemapFetcher = new SitecoreSitemapFetcher();
