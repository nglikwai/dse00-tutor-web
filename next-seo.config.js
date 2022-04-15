import settings from 'src/constants/settings'
import i18n from 'src/i18n'

export default {
  description: i18n.t('common.description'),
  openGraph: {
    locale: 'zh_HK',
    site_name: settings.productName,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: settings.productName,
    },
    {
      name: 'publisher',
      content: settings.productName,
    },
  ],
}
