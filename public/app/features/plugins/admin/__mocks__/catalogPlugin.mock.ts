import { CatalogPlugin } from '../types';

// Exported from the Redux store
export default {
  description: 'Zabbix plugin for Grafana',
  downloads: 35977451,
  hasUpdate: false,
  id: 'alexanderzobnin-zabbix-app',
  info: {
    logos: {
      small: 'https://grafana.com/api/plugins/alexanderzobnin-zabbix-app/versions/4.2.2/logos/small',
      large: 'https://grafana.com/api/plugins/alexanderzobnin-zabbix-app/versions/4.2.2/logos/large',
    },
  },
  isCore: false,
  isDev: false,
  isEnterprise: false,
  isInstalled: false,
  isDisabled: false,
  name: 'Zabbix',
  orgName: 'Alexander Zobnin',
  popularity: 0.2093,
  publishedAt: '2016-04-06T20:23:41.000Z',
  type: 'app',
  signature: 'valid',
  signatureOrg: 'Alexander Zobnin',
  signatureType: 'community',
  updatedAt: '2021-08-25T15:03:49.000Z',
  version: '4.2.2',
  error: undefined,
  details: {
    grafanaDependency: '>=8.0.0',
    pluginDependencies: [],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/alexanderzobnin/grafana-zabbix',
      },
      {
        name: 'Docs',
        url: 'https://alexanderzobnin.github.io/grafana-zabbix',
      },
      {
        name: 'License',
        url: 'https://github.com/alexanderzobnin/grafana-zabbix/blob/master/LICENSE',
      },
    ],
    readme:
      '<h1>Zabbix plugin for Grafana</h1>\n<p><a href="https://circleci.com/gh/alexanderzobnin/grafana-zabbix" target="_blank"><img src="https://circleci.com/gh/alexanderzobnin/grafana-zabbix.svg?style=svg" alt="CircleCI"></a>\n<a href="https://github.com/alexanderzobnin/grafana-zabbix/releases" target="_blank"><img src="https://badge.fury.io/gh/alexanderzobnin%2Fgrafana-zabbix.svg" alt="Version"></a>\n<a href="https://codecov.io/gh/alexanderzobnin/grafana-zabbix" target="_blank"><img src="https://codecov.io/gh/alexanderzobnin/grafana-zabbix/branch/master/graph/badge.svg" alt="codecov"></a>\n<a href="https://github.com/alexanderzobnin/grafana-zabbix/blob/master/CHANGELOG.md" target="_blank"><img src="https://img.shields.io/badge/change-log-blue.svg?style=flat" alt="Change Log"></a>\n<a href="https://alexanderzobnin.github.io/grafana-zabbix" target="_blank"><img src="https://img.shields.io/badge/docs-latest-red.svg?style=flat" alt="Docs"></a>\n<a href="https://twitter.com/alexanderzobnin" target="_blank"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&amp;label=Follow" alt="Twitter URL"></a>\n<a href="https://paypal.me/alexanderzobnin/10" target="_blank"><img src="https://img.shields.io/badge/donate-paypal-2c9eda.svg?style=flat&amp;colorA=0b3684" alt="Donate"></a></p>\n<p>Visualize your Zabbix metrics with the leading open source software for time series analytics.</p>\n<p><img src="https://user-images.githubusercontent.com/4932851/53799185-e1cdc700-3f4a-11e9-9cb4-8330f501b32e.png" alt="Dashboard"></p>\n<h2>Features</h2>\n<ul>\n<li>Select multiple metrics <a href="https://alexanderzobnin.github.io/grafana-zabbix/guides/gettingstarted/#multiple-items-on-one-graph" target="_blank">by using Regex</a></li>\n<li>Create interactive and reusable dashboards with <a href="https://alexanderzobnin.github.io/grafana-zabbix/guides/templating/" target="_blank">template variables</a></li>\n<li>Show events on graphs with <a href="http://docs.grafana.org/reference/annotations/" target="_blank">Annotations</a></li>\n<li>Display active problems with Triggers panel</li>\n<li>Transform and shape your data with <a href="https://alexanderzobnin.github.io/grafana-zabbix/reference/functions/" target="_blank">metric processing functions</a> (Avg, Median, Min, Max, Multiply, Summarize, Time shift, Alias)</li>\n<li>Find problems faster with <a href="https://alexanderzobnin.github.io/grafana-zabbix/reference/alerting/" target="_blank">Alerting</a> feature</li>\n<li>Mix metrics from multiple data sources in the same dashboard or even graph</li>\n<li>Discover and share <a href="https://grafana.com/dashboards" target="_blank">dashboards</a> in the official library</li>\n</ul>\n<p>See all features overview and dashboards examples at Grafana-Zabbix <a href="http://play.grafana-zabbix.org" target="_blank">Live demo</a> site.\nVisit <a href="https://grafana.com/plugins" target="_blank">plugins page</a> at <a href="http://grafana.com" target="_blank">grafana.com</a> and check out available Grafana data sources, panels and <a href="https://grafana.com/dashboards?dataSource=alexanderzobnin-zabbix-datasource" target="_blank">dashboards</a>.</p>\n<h2>Installation</h2>\n<p>Install by using <code>grafana-cli</code></p>\n<pre><code class="language-sh">grafana-cli plugins install alexanderzobnin-zabbix-app\n</code></pre>\n<p>Or see more installation options in <a href="https://alexanderzobnin.github.io/grafana-zabbix/installation/" target="_blank">docs</a>.</p>\n<h2>Getting started</h2>\n<p>First, <a href="https://alexanderzobnin.github.io/grafana-zabbix/configuration/" target="_blank">configure</a> Zabbix data source. Then you can create your first dashboard with step-by-step <a href="https://alexanderzobnin.github.io/grafana-zabbix/guides/gettingstarted/" target="_blank">Getting started guide</a>.</p>\n<h2>Documentation</h2>\n<ul>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix" target="_blank">About</a></li>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix/installation" target="_blank">Installation</a></li>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix/guides/gettingstarted" target="_blank">Getting Started</a></li>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix/guides/templating" target="_blank">Templating</a></li>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix/reference/alerting/" target="_blank">Alerting</a></li>\n<li><a href="https://alexanderzobnin.github.io/grafana-zabbix/reference/functions/" target="_blank">Metric processing functions</a></li>\n</ul>\n<h2>Community Resources, Feedback, and Support</h2>\n<ul>\n<li>Found a bug? Want a new feature? Feel free to open an <a href="https://github.com/alexanderzobnin/grafana-zabbix/issues/new" target="_blank">issue</a>.</li>\n<li>Have a question? You also can open issue, but for questions, it would be better to use <a href="https://community.grafana.com/" target="_blank">Grafana Community</a> portal.</li>\n<li>Need additional support? Contact me for details <a href="mailto:alexanderzobnin@gmail.com" target="_blank">alexanderzobnin@gmail.com</a></li>\n</ul>\n<hr>\n<p>:copyright: 2015-2021 Alexander Zobnin alexanderzobnin@gmail.com</p>\n<p>Licensed under the Apache 2.0 License</p>\n',
    versions: [
      {
        version: '4.2.2',
        createdAt: '2021-08-25T15:03:47.000Z',
      },
      {
        version: '4.2.1',
        createdAt: '2021-08-10T19:59:28.000Z',
      },
      {
        version: '4.2.0',
        createdAt: '2021-08-10T15:37:58.000Z',
      },
      {
        version: '4.1.5',
        createdAt: '2021-05-18T14:52:59.000Z',
      },
      {
        version: '4.1.4',
        createdAt: '2021-03-09T14:49:58.000Z',
      },
      {
        version: '4.1.3',
        createdAt: '2021-03-05T08:54:12.000Z',
      },
      {
        version: '4.1.2',
        createdAt: '2021-01-28T10:15:29.000Z',
      },
      {
        version: '4.1.1',
        createdAt: '2020-12-30T11:51:47.000Z',
      },
      {
        version: '4.1.0',
        createdAt: '2020-12-28T09:58:47.000Z',
      },
      {
        version: '4.0.2',
        createdAt: '2020-11-13T14:34:08.000Z',
      },
      {
        version: '4.0.1',
        createdAt: '2020-09-02T15:16:32.000Z',
      },
      {
        version: '4.0.0',
        createdAt: '2020-08-26T10:36:59.000Z',
      },
      {
        version: '3.12.4',
        createdAt: '2020-07-28T08:18:12.000Z',
      },
      {
        version: '3.12.3',
        createdAt: '2020-07-17T14:24:28.000Z',
      },
      {
        version: '3.12.2',
        createdAt: '2020-05-28T06:46:27.000Z',
      },
      {
        version: '3.12.1',
        createdAt: '2020-05-25T07:26:13.000Z',
      },
      {
        version: '3.12.0',
        createdAt: '2020-05-21T10:16:59.000Z',
      },
      {
        version: '3.11.0',
        createdAt: '2020-03-23T13:29:01.000Z',
      },
      {
        version: '3.10.5',
        createdAt: '2019-12-26T15:29:46.000Z',
      },
      {
        version: '3.10.4',
        createdAt: '2019-08-08T10:11:23.000Z',
      },
      {
        version: '3.10.3',
        createdAt: '2019-07-26T11:59:53.000Z',
      },
      {
        version: '3.10.2',
        createdAt: '2019-04-23T17:23:44.000Z',
      },
      {
        version: '3.10.1',
        createdAt: '2019-03-05T12:17:20.000Z',
      },
      {
        version: '3.10.0',
        createdAt: '2019-02-15T11:20:40.000Z',
      },
      {
        version: '3.9.1',
        createdAt: '2018-05-03T08:49:25.000Z',
      },
      {
        version: '3.9.0',
        createdAt: '2018-03-23T16:37:53.000Z',
      },
      {
        version: '3.8.1',
        createdAt: '2017-12-21T09:30:44.000Z',
      },
      {
        version: '3.8.0',
        createdAt: '2017-12-20T14:23:50.000Z',
      },
      {
        version: '3.7.0',
        createdAt: '2017-10-24T11:57:08.000Z',
      },
      {
        version: '3.6.1',
        createdAt: '2017-07-26T16:23:09.000Z',
      },
      {
        version: '3.6.0',
        createdAt: '2017-07-26T15:30:18.000Z',
      },
      {
        version: '3.5.1',
        createdAt: '2017-07-10T09:47:25.000Z',
      },
      {
        version: '3.5.0',
        createdAt: '2017-07-05T16:58:20.000Z',
      },
      {
        version: '3.4.0',
        createdAt: '2017-05-17T13:48:12.000Z',
      },
      {
        version: '3.3.0',
        createdAt: '2017-02-10T15:50:27.000Z',
      },
      {
        version: '3.2.1',
        createdAt: '2017-02-02T14:20:53.000Z',
      },
      {
        version: '3.2.0',
        createdAt: '2016-12-20T18:25:36.000Z',
      },
      {
        version: '3.1.2',
        createdAt: '2016-11-09T19:12:05.000Z',
      },
      {
        version: '3.1.1',
        createdAt: '2016-09-27T18:05:38.000Z',
      },
      {
        version: '3.1.0',
        createdAt: '2016-09-26T19:31:45.000Z',
      },
      {
        version: '3.0.0',
        createdAt: '2016-07-04T21:17:55.000Z',
      },
      {
        version: '3.0.0-beta8',
        createdAt: '2016-05-02T08:55:24.000Z',
      },
      {
        version: '3.0.0-beta7',
        createdAt: '2016-04-14T18:58:43.000Z',
      },
      {
        version: '3.0.0-beta6',
        createdAt: '2016-04-14T01:10:31.000Z',
      },
      {
        version: '3.0.0-beta5',
        createdAt: '2016-04-12T14:55:31.000Z',
      },
      {
        version: '3.0.0-beta4',
        createdAt: '2016-04-10T21:55:49.000Z',
      },
      {
        version: '3.0.0-beta3',
        createdAt: '2016-04-06T20:23:41.000Z',
      },
    ],
  },
} as CatalogPlugin;
