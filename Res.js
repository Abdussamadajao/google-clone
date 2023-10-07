export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hey',
        totalResults: '41500000',
        searchTerms: 'hey',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2427598b19614dc60',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hey',
        totalResults: '41500000',
        searchTerms: 'hey',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2427598b19614dc60',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.41096,
    formattedSearchTime: '0.41',
    totalResults: '41500000',
    formattedTotalResults: '41,500,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hey There - Google Maps',
      htmlTitle: '<b>Hey</b> There - Google Maps',
      link:
        'https://www.google.com/maps/search/?api=1&query=Hey+There&query_place_id=ChIJL3pmS1llsjURucv9UYxX37U',
      displayLink: 'www.google.com',
      snippet:
        'Hey There. Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/\nunpaved trails. Live traffic. Fast. Slow. 2000 km. Set depart & arrive time.',
      htmlSnippet:
        '<b>Hey</b> There. Your location. Trails. Dedicated lanes. Bicycle-friendly roads. Dirt/<br>\nunpaved trails. Live traffic. Fast. Slow. 2000 km. Set depart &amp; arrive time.',
      cacheId: 'BeF5ffiyXpwJ',
      formattedUrl:
        'https://www.google.com/maps/search/?api=1&query=Hey+There...',
      htmlFormattedUrl:
        'https://www.google.com/maps/search/?api=1&amp;query=<b>Hey</b>+There...',
      pagemap: {
        cse_thumbnail: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs',
            width: '204',
            height: '247',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            'twitter:card': 'summary',
            'theme-color': '#3367d6',
            viewport: 'initial-scale=1.0, user-scalable=no',
            google: 'notranslate',
          },
        ],
        cse_image: [
          {
            src:
              'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Richa',
      htmlTitle: '<b>Hey</b> Richa',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDc2ZGFlMC9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        'Hey Richa. Subscribe. Visit website. Hello , my name is Richa and I am an \nentrepreneur aswell as a social media marketer and I will provide u knowledge ...',
      htmlSnippet:
        '<b>Hey</b> Richa. Subscribe. Visit website. Hello , my name is Richa and I am an <br>\nentrepreneur aswell as a social media marketer and I will provide u knowledge&nbsp;...',
      cacheId: 'Jt2Oq1_JOE4J',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvSjTfBkfafmLC9srCpyI7z7kBp_FDJ6a9OUZjB6KH2DULQr4',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDc2ZGFlMC9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey Richa',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey Richa',
            'music:creator': 'Hey Richa',
            title: 'Hey Richa',
            'og:description':
              'Hello , my name is Richa and I am an entrepreneur aswell as a social media marketer and I will provide u knowledge about all sort of Marketing related tips and tricks.',
            'twitter:creator': 'Hey Richa',
            'article:author': 'Hey Richa',
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvSjTfBkfafmLC9srCpyI7z7kBp_FDJ6a9OUZjB6KH2DULQr4',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDc2ZGFlMC9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvSjTfBkfafmLC9srCpyI7z7kBp_FDJ6a9OUZjB6KH2DULQr4',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Basha',
      htmlTitle: '<b>Hey</b> Basha',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yMzlmZDI5Yy9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        "Hey there! It's me Basha. Will share some How-to's and pro'ly anything under the \nsun!",
      htmlSnippet:
        '<b>Hey</b> there! It&#39;s me Basha. Will share some How-to&#39;s and pro&#39;ly anything under the <br>\nsun!',
      cacheId: 'qV2Iss7NulcJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxTXKeiJp8uSxRUePaCApQHMbUlCdLKs6jxLf44ORQr9PfXYm0',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMzlmZDI5Yy9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey Basha',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey Basha',
            'music:creator': 'Hey Basha',
            title: 'Hey Basha',
            'og:description':
              "Hey there! It's me Basha. Will share some How-to's and pro'ly anything under the sun!",
            'twitter:creator': 'Hey Basha',
            'article:author': 'Hey Basha',
            'twitter:image':
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxTXKeiJp8uSxRUePaCApQHMbUlCdLKs6jxLf44ORQr9PfXYm0',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMzlmZDI5Yy9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxTXKeiJp8uSxRUePaCApQHMbUlCdLKs6jxLf44ORQr9PfXYm0',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Baby Podcast',
      htmlTitle: '<b>Hey</b> Baby Podcast',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9iZTdlZjdjL3BvZGNhc3QvcnNz',
      displayLink: 'www.google.com',
      snippet:
        'Hey Baby Podcast. Subscribe. Visit website. The kids are alright. - The world is \nchanging quickly, and as we see the shards of shattered glass ceilings ...',
      htmlSnippet:
        '<b>Hey</b> Baby Podcast. Subscribe. Visit website. The kids are alright. - The world is <br>\nchanging quickly, and as we see the shards of shattered glass ceilings&nbsp;...',
      cacheId: 'vuO-VB1A5GQJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDL2zQ7-WdX9eLitdhAIn-pHk25YkyBxVCVq5PgmAc2CIS57M',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iZTdlZjdjL3BvZGNhc3QvcnNz',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey Baby Podcast',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey Baby Podcast',
            'music:creator': 'Hey Baby Podcast',
            title: 'Hey Baby Podcast',
            'og:description':
              'The kids are alright. - The world is changing quickly, and as we see the shards of shattered glass ceilings fall...the next generation of thinkers and creators are taking their position. "Hey Baby" is a movement of young people who are destined to make their mark on the world - and believe me, it isn\'t an easy task.',
            'twitter:creator': 'Hey Baby Podcast',
            'article:author': 'Hey Baby Podcast',
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDL2zQ7-WdX9eLitdhAIn-pHk25YkyBxVCVq5PgmAc2CIS57M',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iZTdlZjdjL3BvZGNhc3QvcnNz',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDL2zQ7-WdX9eLitdhAIn-pHk25YkyBxVCVq5PgmAc2CIS57M',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'The Hey Black Girl Podcast',
      htmlTitle: 'The <b>Hey</b> Black Girl Podcast',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjZhMGUwYy9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        'Hey Black Girl Official is a digital community designed to connect, inspire, and \nencourage black women.',
      htmlSnippet:
        '<b>Hey</b> Black Girl Official is a digital community designed to connect, inspire, and <br>\nencourage black women.',
      cacheId: 'vnXYjFrbtgcJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS14nLLHBhtW_NXZJiJdx9egrm8BiUKGNFoM0vaGH7sFX8PTZRf',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjZhMGUwYy9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'The Hey Black Girl Podcast',
            'og:site_name': 'Google Podcasts',
            'og:title': 'The Hey Black Girl Podcast',
            'music:creator': 'The Hey Black Girl Podcast',
            title: 'The Hey Black Girl Podcast',
            'og:description':
              'Hey Black Girl Official is a digital community designed to connect, inspire, and encourage black women.',
            'twitter:creator': 'The Hey Black Girl Podcast',
            'article:author': 'The Hey Black Girl Podcast',
            'twitter:image':
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS14nLLHBhtW_NXZJiJdx9egrm8BiUKGNFoM0vaGH7sFX8PTZRf',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yYjZhMGUwYy9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS14nLLHBhtW_NXZJiJdx9egrm8BiUKGNFoM0vaGH7sFX8PTZRf',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Shut Up',
      htmlTitle: '<b>Hey</b> Shut Up',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hcGkucG9kY2FjaGUubmV0L3Nob3dzL2FiZTQzODgxLTIzNGItNDc5OC1iY2ZjLWMzMjMwM2VlYWFkNC9mZWVk',
      displayLink: 'www.google.com',
      snippet:
        'A funny podcast with very vague topics. Listen to us on SoundCloud too!',
      htmlSnippet:
        'A funny podcast with very vague topics. Listen to us on SoundCloud too!',
      cacheId: 'LD-rANTBzu0J',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReSZLw4shviQAzs0uk6pXtu8tkNJWceraGaq2WvW8ZEEy3mGQa',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5yZWRjaXJjbGUuY29tL2FiZTQzODgxLTIzNGItNDc5OC1iY2ZjLWMzMjMwM2VlYWFkNA',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey Shut Up',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey Shut Up',
            'music:creator': 'Hey Shut Up',
            title: 'Hey Shut Up',
            'og:description':
              'A funny podcast with very vague topics. Listen to us on SoundCloud too!',
            'twitter:creator': 'Hey Shut Up',
            'article:author': 'Hey Shut Up',
            'twitter:image':
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReSZLw4shviQAzs0uk6pXtu8tkNJWceraGaq2WvW8ZEEy3mGQa',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5yZWRjaXJjbGUuY29tL2FiZTQzODgxLTIzNGItNDc5OC1iY2ZjLWMzMjMwM2VlYWFkNA',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReSZLw4shviQAzs0uk6pXtu8tkNJWceraGaq2WvW8ZEEy3mGQa',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Mr D.J. Podcast',
      htmlTitle: '<b>Hey</b> Mr D.J. Podcast',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85ZDQ5MzVjL3BvZGNhc3QvcnNz',
      displayLink: 'www.google.com',
      snippet:
        "This podcast is a platform to share my own personal growth/struggles, life \nrealizations, my opinion on current events (that I care about), how I navigate life's \nmany ...",
      htmlSnippet:
        'This podcast is a platform to share my own personal growth/struggles, life <br>\nrealizations, my opinion on current events (that I care about), how I navigate life&#39;s <br>\nmany&nbsp;...',
      cacheId: 'gn_4BALewlMJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB0Iw5vF7hOKEPZ5pCCnqIbXWTlko_QBtZDCC8099PM_SwTk',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85ZDQ5MzVjL3BvZGNhc3QvcnNz',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey Mr D.J. Podcast',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey Mr D.J. Podcast',
            'music:creator': 'Hey Mr D.J. Podcast',
            title: 'Hey Mr D.J. Podcast',
            'og:description':
              "This podcast is a platform to share my own personal growth/struggles, life realizations, my opinion on current events (that I care about), how I navigate life's many relationships, highlight the communities and cultures I come from and support! With a splash of dope Music here and there.",
            'twitter:creator': 'Hey Mr D.J. Podcast',
            'article:author': 'Hey Mr D.J. Podcast',
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB0Iw5vF7hOKEPZ5pCCnqIbXWTlko_QBtZDCC8099PM_SwTk',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85ZDQ5MzVjL3BvZGNhc3QvcnNz',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB0Iw5vF7hOKEPZ5pCCnqIbXWTlko_QBtZDCC8099PM_SwTk',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey Amigo - Google My Maps',
      htmlTitle: '<b>Hey</b> Amigo - Google My Maps',
      link:
        'https://www.google.com/maps/ms?ie=UTF8&oe=UTF8&msa=0&msid=116131200643646760145.000480ed33210118c32e9',
      displayLink: 'www.google.com',
      snippet:
        'Socios Hey Amigo. ... Hey Amigo. Map Legend. Terms. 2 km. This map was \ncreated by a user. Learn how to create your own. Manage account. Create new \nmap.',
      htmlSnippet:
        'Socios <b>Hey</b> Amigo. ... <b>Hey</b> Amigo. Map Legend. Terms. 2 km. This map was <br>\ncreated by a user. Learn how to create your own. Manage account. Create new <br>\nmap.',
      cacheId: 'oEQJQckmMXcJ',
      formattedUrl: 'https://www.google.com/maps/ms?ie=UTF8&oe=UTF8&msa=0...',
      htmlFormattedUrl:
        'https://www.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0...',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
            name: 'Hey Amigo - Google My Maps',
            description: 'Socios Hey Amigo',
            url:
              'https://www.google.com/maps/d/viewer?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1U7MrjKXAJwJREsRuLQ4lYoFr4to%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hey Amigo - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Socios Hey Amigo',
            'og:title': 'Hey Amigo - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
            'og:description': 'Socios Hey Amigo',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
          },
        ],
        cse_image: [
          {
            src:
              'https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Oh Hey, Void!',
      htmlTitle: 'Oh <b>Hey</b>, Void!',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85MmZkNzE4L3BvZGNhc3QvcnNz',
      displayLink: 'www.google.com',
      snippet:
        'Oh Hey, Void! Host, Amber, shares her love of storytelling and philosophical \nramblings to explore the human psyche. With audio dramas, philosophy essays,\n ...',
      htmlSnippet:
        'Oh <b>Hey</b>, Void! Host, Amber, shares her love of storytelling and philosophical <br>\nramblings to explore the human psyche. With audio dramas, philosophy essays,<br>\n&nbsp;...',
      cacheId: 'J206swb1TqgJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fW1KUirdj0HItI-4ljko2gNUS5eRmffXNFYSXFFoQ4KqBFE',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85MmZkNzE4L3BvZGNhc3QvcnNz',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Oh Hey, Void!',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Oh Hey, Void!',
            'music:creator': 'Oh Hey, Void!',
            title: 'Oh Hey, Void!',
            'og:description':
              'Oh Hey, Void! Host, Amber, shares her love of storytelling and philosophical ramblings to explore the human psyche. With audio dramas, philosophy essays, and live open discussions this podcast is a yell into the void to discover whatever and whoever might be out there.  Support this podcast: https://anchor.fm/ohheyvoid/support',
            'twitter:creator': 'Oh Hey, Void!',
            'article:author': 'Oh Hey, Void!',
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fW1KUirdj0HItI-4ljko2gNUS5eRmffXNFYSXFFoQ4KqBFE',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85MmZkNzE4L3BvZGNhc3QvcnNz',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fW1KUirdj0HItI-4ljko2gNUS5eRmffXNFYSXFFoQ4KqBFE',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hey, you up?',
      htmlTitle: '<b>Hey</b>, you up?',
      link:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80NDM1M2Y0Yy9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        "Late night thoughts, we all have them. It's not until I close my eyes at night when \nmy mind decides to evaluate my existence and ask the most breakthrough ...",
      htmlSnippet:
        'Late night thoughts, we all have them. It&#39;s not until I close my eyes at night when <br>\nmy mind decides to evaluate my existence and ask the most breakthrough&nbsp;...',
      cacheId: 'YThnZbrETmsJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRikKdmVUphywYpChOUt38xDRULn3IELltJw404GqPO1CQ5k0',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NDM1M2Y0Yy9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': 'Hey, you up?',
            'og:site_name': 'Google Podcasts',
            'og:title': 'Hey, you up?',
            'music:creator': 'Hey, you up?',
            title: 'Hey, you up?',
            'og:description':
              "Late night thoughts, we all have them. It's not until I close my eyes at night when my mind decides to evaluate my existence and ask the most breakthrough questions. Moving back home with my parents has gotten a bit lonely so imma take up this space and talkkkkk. So if you're up and like talking about life, listen up. If you want to share about yourself or if anything I say helps you in any way feel free to message me on my Instagram, @ diieaana 🤍",
            'twitter:creator': 'Hey, you up?',
            'article:author': 'Hey, you up?',
            'twitter:image':
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRikKdmVUphywYpChOUt38xDRULn3IELltJw404GqPO1CQ5k0',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NDM1M2Y0Yy9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src:
              'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRikKdmVUphywYpChOUt38xDRULn3IELltJw404GqPO1CQ5k0',
          },
        ],
      },
    },
  ],
};
